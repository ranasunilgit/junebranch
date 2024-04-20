
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
          <NavLink  className="nav-link" to="/home">Home</NavLink >
        
      </li>
      
      
	  <li className="nav-item">
        
        <NavLink  className="nav-link" to="/selected">Subscribed ITEMS</NavLink >
      </li>
      <li className="nav-item">
        
        <NavLink  className="nav-link" to="/getselect">Do Subscribe</NavLink >
      </li>
     
      
      <li className="nav-item">
        
      
        <NavLink className="nav-link" to="/list">
         Album List
         
        </NavLink> 
      </li>
      
    </ul>
  </div>
  
</nav>
  </>;
}
export default Header;