import React from 'react';
import './index.css';
import Home from "./pages/Home"
import {Team} from "./pages/Team"
import MyImage from "./logo raid.jpeg"
// import {BrowserRouterProps as Router,Link,Routes,Route} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <div class="overlay-image">
            <img src={MyImage} />
        </div>
    </nav>
    
  );
};


export default Navbar;
