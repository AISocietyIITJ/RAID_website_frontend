import { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>

      <nav className="navbar-container">
        <div className="logo"></div>

        {/* Mobile menu */}
        <div className="lg:hidden">
        <nav className="navbar">
            {/* <div className="navbar__dropdown"> */}
              <button onClick={handleDropdownToggle}> 
              ☰
                {isDropdownOpen ? 'Close Dropdown' : 'Open Dropdown'}
              </button>
              {isDropdownOpen && (
                <div className="navbar__dropdown-content">
                  <Link className="link" to="/">
                    HOME
                  </Link>
                  <Link className="link" to="/teams">
                    TEAM
                  </Link>
                  <Link className="link" to="/projects">
                    PROJECTS
                  </Link>
                  <Link className="link" to="/achievements">
                    ACHIEVEMENTS
                  </Link>
                </div>
              )}
            
          </nav>
          
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
        <div className="nav-links">
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/teams">
              TEAM
            </Link>
            <Link className="link" to="/projects">
              PROJECTS
            </Link>
            <Link className="link" to="/achievements">
              ACHIEVEMENTS
            </Link>
          </div>
         
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
