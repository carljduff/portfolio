import React from "react";
import { teaser } from "../data";
import TeaserCard from "./TeaserCard";
import "../css/port.css"

const BlogList = () => {
    return(
        <div className="teaser-map">
            <h2 className="teaser-blog-title">Bootcamp</h2>
            <h2 className="teaser-blog-title">Journey Blog</h2>
            {teaser.map((blog) => {

                return <div><TeaserCard key={blog.id} t_id={blog.id} t_title={blog.title} t_date={blog.date} t_desc={blog.description} /></div>
            })}
        </div>
    )
}


export default BlogList;