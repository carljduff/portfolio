import React from "react";
import { projects } from "../data";
import PortCard from "./PortCard";
import "../css/port.css"

const Portfolio = () => {
    return(
        <div className="p1">
        <div className="p1-texts" id={'Portfolio'}>
            {/* <h1 className="p1-title">Create and Inspire.</h1> */}
            <p className="p1-desc">Portfolio</p>
        </div>

        <div className="p1-list">
        {projects.map((item) =>(
            <PortCard key={item.id} img={item.img} link={item.link} desc={item.description} title={item.title}/>
        ))}
        
             
        </div>
</div>

    )
}


export default Portfolio;