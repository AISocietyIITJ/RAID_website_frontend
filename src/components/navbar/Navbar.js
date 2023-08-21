import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import linksData from "./data"


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (

<>
    <div className='lg:hidden p-5'>
    <div className="fixed top-0 right-0 p-5">
    <button className="focus:outline-none" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      </div>
      {isMenuOpen && (
    
        <div className=" mt-3 flex flex-col items-center fixed top-0 left-1/2 transform -translate-x-1/2">
        
          <Link className="block link text-white text-l hoverable transition-transform  hover:before:opacity-100 hover:text-customOrange bounce mb-4 neon" to="/">
            HOME
          </Link>
          <Link className="block link text-white text-l hoverable transition-transform  hover:before:opacity-100 hover:text-customOrange bounce mb-4 neon" to="/teams">
            TEAM
          </Link>
          <Link className="block link text-white text-l hoverable transition-transform  hover:before:opacity-100 hover:text-customOrange bounce mb-4 neon" to="/projects">
            PROJECTS
          </Link>
          <Link className="block link text-white text-l hoverable transition-transform  hover:before:opacity-100 hover:text-customOrange bounce mb-4 neon" to="/achievements">
         
            ACHIEVEMENTS
          </Link>
        </div>



      )}
{isMenuOpen ? null : (
        <div className="fixed top-0 ">
        <img
            className="h-20  w-20"
            src={require('../../logo_f.png')}
            alt="Logo"
    />
    </div>
          )}
    </div>
     

<div class="hidden lg:block">
    <nav className="flex flex-row justify-start items-center gap-10 bg-black-200 p-4 pl-20 pr-20 fixed top-3 left-1/2 transform -translate-x-1/2 left-100 glass">
      <div className="flex items-center space-x-20">
      
      
      {linksData.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          className="text-white text-2xl hoverable transition-transform hover:before:opacity-100 hover:before:translate-y-[-5px] hover:text-customOrange bounce glinks neon"
        >
          
          {link.name}
        </Link>
      ))}
    </div>
    
    </nav>
    </div>
    </>
  );
}

export default Navbar;
