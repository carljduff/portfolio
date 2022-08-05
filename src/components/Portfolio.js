import React from "react";
import { projects } from "../data";
import PortCard from "./PortCard";
import "../css/port.css"

const Portfolio = () => {
    return(
        <div className="p1">
        <div className="p1-texts" id={'Portfolio'}>
            {/* <h1 className="p1-title">Create and Inspire.</h1> */}
            <p className="p1-desc">Featured</p> 
            <p className="p1-desc">Projects</p> 
        </div>

        <div className="p1-list">
        {projects.map((item) =>(
            <PortCard key={item.id} img={item.img} link={item.link} desc={item.description} title={item.title}/>
        ))}
        
             
        </div>

        <div className="port-btn-div">
            <button className="full-port-btn"><a href="https://www.github.com/carljduff">View All Projects</a></button>
        </div>
</div>

    )
}


export default Portfolio;