import React from "react";
import "../css/port.css"

const TeaserCard = ({id, title, date, desc}) => {
    return(
        <div className="teaser-main">
            <div>{title}</div>
            <div>{date}</div>
            <div>{desc}</div>
        </div>
    )
}


export default TeaserCard;