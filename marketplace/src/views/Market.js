import React from 'react';

function Market() {
  return (
    <div className="container mt-4">
    <h2 className="mb-4">
      <span><img src="/images/veg.jpg" height="70" width="90" /></span>
      Vegetable Markets
        
    </h2>

    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Farmers Market Downtown</h5>
            <p className="card-text">123 Main St, Cityville</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Green Garden Market</h5>
            <p className="card-text">456 Elm St, Townsville</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Fresh Harvest Market</h5>
            <p className="card-text">789 Oak St, Villagetown</p>
          </div>
        </div>
      </div>
    </div>

    <h2 className="mt-5 mb-4">
      <span> <img src="/images/fruits.jpg" height="70" width="90" /></span>
      Fruit Markets
    
    </h2>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Fruit Haven</h5>
            <p className="card-text">101 Pine St, Hamletville</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Orchard Delight</h5>
            <p className="card-text">222 Walnut St, Orchard City</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Market;