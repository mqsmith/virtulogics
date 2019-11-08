const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/virtulogics"
);

const userSeed = [
  {
    name: "Mike",
    email: "smith.mike@mac.com",
    password: "password1",
  },
  {
    name: "test",
    email: "test123@yahoo.com",
    password: "test1234",
  },
  {
    name: "Ryan",
    email: "ryansims265@gmail.com",
    password: "password1",
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
