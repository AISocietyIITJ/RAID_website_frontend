import React from "react";
import "./index.css";
import MyImage from "./logo raid.jpeg"
import {Link} from "react-router-dom"
// import {BrowserRouterProps as Router,Link,Routes,Route} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="overlay-image">
        <img src={MyImage} alt="raid_logo"/>
      </div>
        
      <div>
        <div className='nav-links-2'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/teams">Team</Link>
        </div>
        
      </div> 
        
    </nav>
    
  );
};


export default Navbar;
