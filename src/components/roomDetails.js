import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import RoomsBanner from "./roomsBanner"
import {RoomContext} from "../roomContextProvider"



function RoomDetails(){
    let {slug} = useParams()

    const {data} = useContext(RoomContext)

    const roomObj = data.find(room => room.fields.slug === slug)

    const imgUrl = roomObj.fields.images[0].fields.file.url

    const roomName = roomObj.fields.name

    const otherImages = roomObj.fields.images.filter((img,i) => i != 0).map((img,i) => <div key={i} className="other-imgs-div"><img src={img.fields.file.url} /></div>)

    const pets = roomObj.fields.pets ? "Pets Allowed" : "Pets Not Allowed"

    const breakFast = roomObj.fields.breakfast ? "Free Breakfast Included" : "Free Breakfast Not Included"

    const extras = roomObj.fields.extras.map((extra,i) => <p key={i}>-{extra}</p>)

    return(
    <div className="room-details">  
        <RoomsBanner url={imgUrl} btnText={roomName} goBack="/rooms"/> 
        
        <div className="other-imgs main-container">
            {otherImages}
        </div>

        <div className="details-div main-container">

            <div>
                <h1 className="section-title">Details</h1>
                <p>{roomObj.fields.description}</p>
            </div>

            <div className="info">
                <h1 className="section-title">Info</h1>
                <p>Price : ${roomObj.fields.price}</p>
                <p>Size : ${roomObj.fields.size} SQFT</p>
                <p>Max Capacity : {roomObj.fields.capacity} people</p>
                <p>{pets}</p>
                <p>{breakFast}</p>
            </div>

        </div>

        <h1 className="section-title main-container">Extras</h1>

        <div className="extras main-container">
              
                {extras}
        </div>
        
    </div>)
}

export default RoomDetails