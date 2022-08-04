import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "./BlogContext";

const Blog = () => {
     let {blogID} = useParams();
    const [blog, setBlog] = useContext(BlogContext);
    console.log(blog)
    let newBlog = blog.blogs.find((item) => item.id == blogID)
    const { id, week, title, date, description, questions } = newBlog || {};

    return(
        <div>
                <div>{week}</div>
                <div>{title}</div>
                <div>{date}</div>
                <div>{description}</div>
                <div>{questions[0].q1}</div>
                <div>{questions[0].a1}</div>
                <div>{questions[1].q2}</div>
                <div>{questions[1].a2}</div>
                {questions[2] != undefined && (
                    <div>{questions[2].q3}<br/>
                    {questions[2].a3}</div>
                )}

            
        </div>

    )
}


export default Blog;