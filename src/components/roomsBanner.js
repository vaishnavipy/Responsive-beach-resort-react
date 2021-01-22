import React from "react"
import imgUrl from "../images/room-2.jpeg"
import {Link} from "react-router-dom"

function RoomsBanner({url,btnText}){
    return(
    <div className="room-banner" style={{backgroundImage:`url(${url})`}}>
        <div className="banner-content room-banner-content">
            <h1>{btnText}</h1>
            <hr/>
            
           <Link to="/rooms"> <button className="banner-btn room-banner-btn">Return Home</button></Link>
        </div>
    </div>)
}

RoomsBanner.defaultProps = {url : imgUrl,btnText: "Our Rooms"}

export default RoomsBanner