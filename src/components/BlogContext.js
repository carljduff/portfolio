import React, {useState, useEffect, createContext} from "react";
import { blogs } from "../data";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [blog, setBlog] = useState({blogs})

    return(
        <div>
            <BlogContext.Provider value={[blog, setBlog]}>
                {props.children}
            </BlogContext.Provider>
        </div>

    )
}