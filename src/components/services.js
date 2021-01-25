import React from "react"
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';

function Services(){
    return(
    <div className="services-container ">
        <h1 className="section-title">Services</h1>
        <hr  className="section-hr"/>
        <div className="services-div">
            <div>
                <span className="icon"><FaCocktail /></span>
                <h4 className="service-title">Free Cocktails</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
            </div>

            <div>
                <span className="icon"><FaHiking /></span>
                <h4  className="service-title">Endless Hiking</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
            </div>

            <div>
                <span className="icon"><FaShuttleVan /></span>
                <h4  className="service-title">Free Shuttle</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
            </div>

            <div>
                <span className="icon"><FaBeer /></span>
                <h4  className="service-title">Strongest Beer</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
            </div>
        </div>
    </div>)
}
export default Services