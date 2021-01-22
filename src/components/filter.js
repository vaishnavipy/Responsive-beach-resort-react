import React,{useState} from "react"




function Filter(){

    const [input,setInput] = useState({roomType:"",guests:""})

   

    function handleChange(e){

        const {name,value} = e.target

        setInput(prevState => ({...prevState,[name]:value}))

    }

    return(
        <div className="services-container filter-bg">
            <h1 className="section-title">Search Rooms</h1>
            <hr  className="section-hr"/>
            <div className="filter-grid main-container">
                <div className="filter-flex">
                    <label for="room-type">Room Type</label>
                    <select name="roomType" id="roomType" value={input.roomType} onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="triple">Triple</option>
                        <option value="Family">Family</option>
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
                    </select>
                </div>

                <div className="filter-flex">
                    <label for="room-price">Room Type</label>
                    <select></select>
                </div>

                <div className="filter-flex">
                    <label for="room-size">Room Size</label>
                    <select></select>
                </div>

                <div  className="filter-flex">
                   <p className="checkbox-flex"> <input type="checkbox" /><label>Breakfast</label></p>
                   <p className="checkbox-flex"> <input type="checkbox" /><label>Pets</label></p>
                </div>
            </div>
       </div> 
        )
}

export default Filter