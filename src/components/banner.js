import React from "react"
import {Link} from "react-router-dom"

function Banner(){
    return(
    <div className="banner">
        <div className="banner-content">
            <h1>Luxurious Rooms</h1>
            <hr/>
            <p>Deluxe Rooms Starting at $299</p>
            <Link to="/rooms"><button className="banner-btn">Our Rooms</button></Link>
        </div>
    </div>)
}
export default Banner