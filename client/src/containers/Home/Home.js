// Import Links
import React, { Component } from 'react';

// Styling Variables
const newImage = {
  color: 'white'
};

const jumbotron = {
  backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1791&q=80")',
  color: 'white',
  height: '500px',
  fontSize: '80px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const mainButton = {
  backgroundColor: '#ff5235',
  fontSize: '20px',
  width: '150px',
  margin: '35px',
  borderColor: 'black'
};

const mainButtonText = {
  color: 'white'
};

const containerMarketing = {
  backgroundColor: 'white'
};

const featureText = {
  padding: '55px'
};

const highlightText = {
  color: '#ff5235',
};

const featureButton = {
  backgroundColor: '#15a2b8'
};

const planList = {
  listStyleType: 'none'
};


const signUpButton = {
  backgroundColor: '#ff5235'
};

const pricingColumn = {
  textAlign: 'center',
  display: 'inline-block'
}

class Home extends Component {
  render() {
    return (

      <div className="container">
        <div class="jumbotron" style={jumbotron}>
          <h1>Virtulogics</h1>
          <p>Simple, Seamless Capacity Planning</p>
          <p><button className="btn btn-primary btn-lg" style={mainButton}><a href="/register" style={mainButtonText}>Try it Free</a></button></p>
        </div>
        <div className="container marketing" style={containerMarketing}>
          <div className="row featurette" style={featureText}>
            <div className="col-md-7" >
              <h2 className="featurette-heading">Smart Capacity Planning Suggestions <span style={highlightText}>It'll blow your mind.</span></h2>
              <p className="lead">Easily and Quickly know when its time to upgrade. </p>
              <br />
              <p className="lead"> Data is displayed in a clear and concise way where you can easy get an overview of your current load. Exactly what you need. </p>
              <br />
              <p className="lead">Easily customize each of your graphs or extend the time frame visible. </p>
              <br />
              <p><a className="btn btn-secondary" href="/register" role="button" style={featureButton}>Try for Free</a></p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={newImage} src="https://howto.socialchorus.com/hc/article_attachments/360003206494/Dashboard.gif" data-holder-rendered="true" />
            </div>
          </div>

          <hr></hr>

          <div className="row featurette" style={featureText}>
            <div className="col-md-5 pull-md-7">
              <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://media.giphy.com/media/fWwR0wiDbqmWs/giphy.gif" data-holder-rendered="true" style={newImage} />
            </div>
            <div className="col-md-7 push-md-5">
              <h2 className="featurette-heading">Clean, Easy to Read Dashboard </h2> <h2><span style={highlightText}>Check it out for yourself.</span></h2>
              <p className="lead">Our easy to read dashboard doesn't require weeks of training. </p>
              <br />
              <p className="lead">Data is displayed in a clear and concise way where you can easy get an overview of your current load. Exactly what you need. </p>
              <br />
              <p><a className="btn btn-secondary" href="/register" role="button" style={featureButton}>Try for Free</a></p>
            </div>

          </div>

          <hr></hr>

          <div className="row featurette" style={featureText}>
            <div className="col-md-7">
              <h2 className="featurette-heading">Practical Pricing.  <span style={highlightText}>No Headaches.</span></h2>
              <br></br>
              <p className="lead">We don't like to play games when it comes your money. </p>
              <p className="lead">Our clear and simple pricing structure keeps you focused on what really matters and headache-free!</p>
              <p className="lead">Flat Monthly rates with no caps on the number of users in your account</p>
              <p className="lead">Robust referal program makes it even easier to save!</p>
              <br />
              <p><a className="btn btn-secondary" href="/register" role="button" style={featureButton}>Try for Free</a></p>

            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="https://cdn.slidemodel.com/wp-content/uploads/7942-01-infinite-business-powerpoint-template-16x9-23-1-870x489.jpg" data-holder-rendered="true" style={newImage} />
            </div>

          </div>

          <hr></hr>

          <div className="row">
            <div className="col-lg-4" style={pricingColumn}>
              <img className="rounded-circle" src="https://image.flaticon.com/icons/svg/179/179250.svg" alt="Generic placeholder 1" width="140" height="140" />
              <h2>Bronze Plan</h2>
              <ul style={planList}>
                <li>Capacity Planner Dashboard</li>
                <li>Ability to add up to 2 clusters</li>
                <li>2 Users</li>
                <li>Load Alert Notifications </li>
              </ul>
              <p><a className="btn btn-secondary" href="/register" role="button" style={signUpButton}>Sign Up »</a></p>
            </div>
            <div className="col-lg-4" style={pricingColumn}>
              <img className="rounded-circle" src="https://image.flaticon.com/icons/svg/179/179251.svg" alt="Generic placeholder 2" width="140" height="140" />
              <div >
                <h2 >Silver Plan</h2>
                <ul style={planList}>
                  <li>Everything in the Bronze Plan</li>
                  <li>Ability to add up to 5 clusters</li>
                  <li>5 Users</li>
                  <li>Smart Load Balance</li>
                </ul>
                <p><a className="btn btn-secondary" href="/register" role="button" style={signUpButton}>Sign Up »</a></p>
              </div>
            </div>
            <div className="col-lg-4" style={pricingColumn}>
              <img className="rounded-circle" src="https://image.flaticon.com/icons/svg/179/179249.svg" alt="Generic placeholder 3" width="140" height="140" />
              <h2>Gold Plan</h2>
              <ul style={planList}>
                <li>Everything in the Bronze and Silver Plan</li>
                <li>Ability to add up to 10 clusters</li>
                <li>10 Users</li>
                <li>Priority Integrations</li>
              </ul>
              <p><a className="btn btn-secondary" href="/register" role="button" style={signUpButton}>Sign Up »</a></p>
            </div>
          </div>

        </div>

      </div>
    )
  };
};

// Export
export default Home;