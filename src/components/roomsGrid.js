import React, { useContext } from "react"
import {RoomContext} from "../roomContextProvider"
import {Link} from "react-router-dom"



function RoomsGrid(){

    const {data,handleHover,handleHoverOut} = useContext(RoomContext)

   

    const allRooms = data.map((room,i) => {
        const {name,slug,images} = room.fields

        return(
            <div className="featured-room room-img-grid" key={i} >
                <div className="room-flex all-room-flex-height" style={{backgroundImage:`url(${images[0].fields.file.url})`}} onMouseEnter={(e)=>{handleHover(e)}} onMouseLeave={(e)=>{handleHoverOut(e)}}>
                   
                <Link to={`/rooms/${slug}`} className="features-btn">Features</Link>
                </div>
                <h4 className="room-title">{name}</h4>
            </div>
        )
    })

    return(
    <div className="all-rooms-container">  

        {allRooms}
        
    </div>)
}

export default RoomsGrid