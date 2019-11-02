const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check,validationResult} = require('express-validator/check');

const User = require('../../models/User');

//router.get('/',(req,res)=>res.send("User Route"));

// @route    POST api/users
// @desc     Register user
// @access   Public

//post request to api/users

router.post(
  '/',
  [
    check('name', 'Name is a required field')
      .not()
      .isEmpty(),
    check('email', 'Email is a required field').isEmail(),
    check(
      'password',
      'Your password has to be 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      //check to see if the user exists
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //get users gravatar

      const avatar = gravatar.url(email, {
        s: '200',  //size
        r: 'pg',   //rating
        d: 'mm'    //default
      });

      //create a instance of a user
      user = new User({
        name,
        email,
        avatar,
        password
      });

      //encrypt the password

      //create salt
      const salt = await bcrypt.genSalt(10);

      //hash the password
      user.password = await bcrypt.hash(password, salt);

      //save the user to the DB

      await user.save();


      const payload = {
        user: {
          id: user.id
        }
      };

      //Return jsonwebtoken

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
