
import { NavLink  } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap'
function Header(){
  
    return <> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">MarketPlace</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    
      
      <li className="nav-item active">
          <NavLink  className="nav-link" to="/markets">Market</NavLink >
        
      </li>
      <li className="nav-item">
      
        <NavLink  className="nav-link" to="/orders">Orders</NavLink >

      </li>
      <li className="nav-item">
       
        <NavLink  className="nav-link" to="/parcel">Delivery</NavLink >
      </li>
	  <li className="nav-item">
        
        <NavLink  className="nav-link" to="/events">Events</NavLink >
      </li>
      <li className="nav-item">
        
        <NavLink  className="nav-link" to="/support">Help</NavLink >
      </li>
      <li className="nav-item">
        
      <NavLink className="nav-link" to="/profile">
         Profile
         
        </NavLink> 
      </li>
      <li className="nav-item">
        
      <NavLink className="nav-link" to="/register">
         Register
         
        </NavLink> 
        <NavLink className="nav-link" to="/items">
         Items
         
        </NavLink> 
      </li>
      
    </ul>
  </div>
  
</nav>
  </>;
}
export default Header;