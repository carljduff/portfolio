import React from "react";
import { teaser } from "../data";
import TeaserCard from "./TeaserCard";

const BlogList = () => {
    return(
        <div>
            {teaser.map((blog) => {
                return <TeaserCard key={blog.id} id={blog.id} title={blog.title} date={blog.date} desc={blog.description} />
            })}
        </div>
    )
}


export default BlogList;