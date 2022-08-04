import React from "react";
import "../css/port.css";

const PortCard = ({img, link, desc, title}) => {
  return (
    <div className="wrapper">
    <h4>{title}</h4>
 <div className="port-card">
   
     <img src={img} alt="" className="port-img"/>
 </div>
 <div className="description">
     {desc}
 </div>
    <button className="btn-link"><a className="view-link" href={link}>View</a></button> 
 </div>
  );
};

export default PortCard;
