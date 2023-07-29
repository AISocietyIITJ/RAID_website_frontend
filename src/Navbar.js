
import React from 'react';
import './index.css';



const Navbar = () => {
  return (
    <nav className="navbar-container">
        <div class="overlay-image">
        </div>
        <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/teams">Teams</a></li>
        
      </ul>
    </nav>
  );
};


export default Navbar;
