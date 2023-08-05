import React from 'react';
import "./index.css"
import Home from './pages/Home';
import {Team} from "./pages/Team"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Achievements} from "./pages/Achievements"
import {Projects} from "./pages/Projects"


const App = () => {
  return (
    
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teams" element={<Team/>}/>
          <Route path="/achievements" element={<Achievements/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>

   
    </div>
    )
}

export default App;


