import React,{useContext, useEffect, useState} from "react"
import { RoomContext } from "../roomContextProvider"




function Filter(){

    const {handleFilters} = useContext(RoomContext)

    const [input,setInput] = useState({roomType:"all",guests:"1",price:"600",minSize:"0",maxSize:"1000",bfchecked:false,petschecked:false})

   

    function handleChange(e){

        const {name,value} = e.target

        if(name == "bfchecked"){

            setInput(prevState => ({...prevState,[name]:!prevState.bfchecked}))
        }else if(name == "petschecked"){

            setInput(prevState => ({...prevState,[name]:!prevState.petschecked}))
        }
        else{

            setInput(prevState => ({...prevState,[name]:value}))
        }   
       
    }

    useEffect(()=>{
        
        handleFilters(input)
    },[input])

    return(
        <div className="services-container filter-bg">
            <h1 className="section-title">Search Rooms</h1>
            <hr  className="section-hr"/>
            <div className="filter-grid main-container">
                <div className="filter-flex">
                    <label for="room-type">Room Type</label>
                    <select name="roomType" id="roomType" value={input.roomType} onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="presidential">Presidential</option>
                        <option value="family">Family</option>
                        <option value="double">Double</option>
                        <option value="single">Single</option>
                    </select>
                </div>

                <div className="filter-flex">
                    <label for="Guests">Guest</label>
                    <select name="guests" id="guests" value={input.guests} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div className="filter-flex">
                    <label for="room-price">Room Price {input.price}$</label>
                    <input type="range" min="1" max="600" value={input.price} onChange={handleChange} name="price"/>
                </div>

                <div className="filter-flex">
                    <label for="room-size">Room Size(sq.ft)</label>
                    <p className="checkbox-flex"> <input type="number" name="minSize" value={input.minSize} onChange={handleChange} min="0"/><input type="number" min="0" name="maxSize" value={input.maxSize} onChange={handleChange}/></p>
                </div>

                <div  className="filter-flex">
                   <p className="checkbox-flex"> <input type="checkbox" checked={input.bfchecked} name="bfchecked"  onChange={handleChange}/><label>Breakfast</label></p>
                   <p className="checkbox-flex"> <input type="checkbox" checked={input.petschecked} name="petschecked" onChange={handleChange}/><label>Pets</label></p>
                </div>
            </div>
       </div> 
        )
}

export default Filter