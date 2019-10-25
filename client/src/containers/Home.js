import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (

<>

<div className="container">
  <div className="row">
<div className="col-sm">
<div className="card bg-dark text-white">
  <img src="http://www.wausaurestaurants.com/public/images/placeholder_image.png" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
</div>

<div className="col-md">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJpPBolR8mG90ZP6Qt6YnUUfg819-6dyDtoSkThw1Cb0F_Tj1w" alt="pcitures"/>
</div>
<div className="row align-items-end">
    <div >
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
  </div>
</div>
</div>




<div className="card mb-3 ">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://www.museumswellington.org.nz/wp-content/uploads/2014/06/placehold.it-1280x850.gif" className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">This is our Dashboard.</h5>
        <p className="card-text">See how clean and easy to use our dashboard is? It's much easier to read your data on a clean easy to read dashboard.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>









<blockquote className="blockquote">
  <p className="mb-0">Check out our ridiculously low pricing plans!</p>
</blockquote>


<div className="card-deck">
  <div className="card">
    <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Bronze Plan</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Per User Per Month</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Silver Pricing Plan</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Per User Per Month</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Gold Plan</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Per User Per Month</small></p>
    </div>
  </div>
</div>

  </>





        );
    }
}

export default Home;