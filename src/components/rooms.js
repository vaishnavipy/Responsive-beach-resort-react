import React from "react"
import RoomsBanner from "./roomsBanner"
import Filter from "./filter"
import RoomsGrid from "./roomsGrid"


function Rooms(){
    return(
    <div>  
        <RoomsBanner /> 
        <Filter />
        <RoomsGrid />
        
    </div>)
}

export default Rooms