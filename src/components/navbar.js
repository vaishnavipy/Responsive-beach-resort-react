import React from "react"
import {Link} from "react-router-dom"


function Navbar(){
    return(
    <div className="navbar-container">
        <div className="container">
            <h2 className="logo">
                Beach <span className="resort">Resort</span>
            </h2> 

            <div className="menu">
              <Link to="/">  <a href="#">Home</a></Link>
              <Link to="/rooms"> <a href="#">Rooms</a></Link>
            </div>

        </div>
    </div>)
}

export default Navbar;

