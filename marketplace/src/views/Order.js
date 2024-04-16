import React from 'react';

function Order() {
  return (
    <div className="container mt-5">
  <h1 className="mb-4">My Orders</h1>
  
  <div className="row order-table">
    <div className="col-md-12">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product A</td>
            <td>2</td>
            <td>$20.00</td>
            <td><span className="btn btn-success">Delivered</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Product B</td>
            <td>1</td>
            <td>$15.00</td>
            <td><span className="btn btn-info">Processing</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Product B</td>
            <td>1</td>
            <td>$15.00</td>
            <td><span className="btn btn-primary">No details available</span></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Product B</td>
            <td>1</td>
            <td>$15.00</td>
            <td><span className="btn btn-warning">Cancel</span></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
  
</div>
  );
}

export default Order;