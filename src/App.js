import React from 'react';
import "./index.css"
import Home from './pages/Home';
import {Team} from "./pages/Team"
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"


const App = () => {
  return (
    
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teams" element={<Team/>}/>
        </Routes>
        <div className='nav-links-2'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/teams">Team</Link>
        </div>
      </Router>
    </div>
    
     
   
  );
};

export default App;


