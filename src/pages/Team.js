import React from "react"
import Home from "../pages/Home"
import Navbar from "../Navbar"
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
import "../styles/team.css"

export const Team=()=>{
    return (
        <div>
            <Navbar />
            <div className="team_page_content">
                {/* Enter the content for team page here*/ }
                <h1>This is the team page</h1>
            </div>
        </div>
        
    )
}