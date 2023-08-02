import React from 'react';
import "./index.css"
import Home from './pages/Home';
import {Team} from "./pages/Team"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"


const App = () => {
  return (
    
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teams" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
     
   
  );
};

export default App;


