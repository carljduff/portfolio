import React from "react";
import { teaser } from "../data";
import TeaserCard from "./TeaserCard";
import "../css/port.css"

const BlogList = () => {
    return(
        <div className="teaser-map">
            <h2 className="teaser-blog-title">My Bootcamp Journey</h2>
            {teaser.map((blog) => {

                return <TeaserCard key={blog.id} t_id={blog.id} t_title={blog.title} t_date={blog.date} t_desc={blog.description} />
            })}
        </div>
    )
}


export default BlogList;