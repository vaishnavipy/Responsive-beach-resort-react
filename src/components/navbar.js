import React from "react"
import {Link} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import { Fragment } from "react"


function Navbar(){

    function handleMenuClick(e){
      let menuElm =  document.querySelector(".small-screen-menu-parent")

        if(menuElm.classList.contains("hide-sidebar")){
        
            menuElm.classList.remove("hide-sidebar")
            menuElm.classList.add("show-sidebar")
        }else{
            menuElm.classList.add("hide-sidebar")
            menuElm.classList.remove("show-sidebar")
        }

    }   

    return(
        <Fragment>
    <div className="navbar-container">
        <div className="container">
            <h2 className="logo">
                Beach <span className="resort">Resort</span>
            </h2> 

            <span className="menu-icon" onClick={handleMenuClick}><GiHamburgerMenu /></span>

            <div className="menu">
              <Link to="/">  <a href="#">Home</a></Link>
              <Link to="/rooms"> <a href="#">Rooms</a></Link>
            </div>

        </div>
       
    </div>

     <div className="small-screen-menu-parent hide-sidebar">
        <div className="small-screen-menu">
            <Link to="/">  <a href="#">Home</a></Link>
            <Link to="/rooms"> <a href="#">Rooms</a></Link>
        </div>
    </div>
 </Fragment>
    )
}
export default Navbar;

