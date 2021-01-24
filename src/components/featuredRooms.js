import React, { useContext } from "react"
import {RoomContext} from "../roomContextProvider"
import {Link} from "react-router-dom"

function FeaturedRooms(){

    const {data,handleHover,handleHoverOut} = useContext(RoomContext)

    console.log(data)

    const featured = data.filter((rooms) => rooms.fields.featured).
                                            map((featuredRoom,i) =>  {
                                                const {name,slug,images,price} = featuredRoom.fields
                                                

                                            return(
                                            <div className="featured-room room-img-grid" key={i} >
                                                <p className="room-price" >${price}<span> per night</span></p>
                                                <div className=" featured-room-flex-height room-flex" style={{backgroundImage:`url(${images[0].fields.file.url})`}} onMouseEnter={(e)=>{handleHover(e)}} onMouseLeave={(e)=>{handleHoverOut(e)}}>
                                                     
                                                    <Link to={`/rooms/${slug}`} className="features-btn">Features</Link>
                                                </div>
                                               
                                                <h3 className="room-title">{name}</h3>
                                            </div>
                                            )
                                            })

    console.log(featured)

    return(
    <div className="featured-rooms-container">
        <h1 className="section-title">Featured Rooms</h1>
        <hr  className="section-hr"/>
        <div className="featured-rooms-grid">
            {featured}
        </div>
    </div>)
}

export default FeaturedRooms