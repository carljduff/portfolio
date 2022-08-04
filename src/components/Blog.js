import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./BlogContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/blog.css";

const Blog = () => {
     let {blogID} = useParams();
    const [blog, setBlog] = useContext(BlogContext);
    console.log(blog)
    let newBlog = blog.blogs.find((item) => item.id === parseInt(blogID))
    const { week, title, date, description, questions } = newBlog || {};

    return(
        <Container>
            <Row>
                <Col className="blog-week">{week}</Col>
                <Col className="blog-title">{title}</Col>
                <Col className="blog-date">{date}</Col>
            </Row>
        
            <Row>
                <Col className="blog-desc">{description}</Col>
            </Row>
            <Row>
                <Col className="blog-q">{questions[0].q1}</Col>
            </Row>
            <Row>
                <Col className="blog-a">{questions[0].a1}</Col>
            </Row>
            <Row>
                <Col className="blog-q">{questions[1].q2}</Col>
            </Row>
            <Row>
                <Col className="blog-a">{questions[1].a2}</Col>
            </Row>
            {questions[2] !== undefined && (
                <Row>
                    <Col className="blog-q">{questions[2].q3}</Col>
                    
                </Row>
                )}
            {questions[2] !== undefined && (

                 <Row>
                 <Col className="blog-a">{questions[2].a3}</Col>
             </Row>
            )}
           
           
        </Container>
        // <div>
        //         <div>{week}</div>
        //         <div>{title}</div>
        //         <div>{date}</div>
        //         <div>{description}</div>
        //         <div>{questions[0].q1}</div>
        //         <div>{questions[0].a1}</div>
        //         <div>{questions[1].q2}</div>
        //         <div>{questions[1].a2}</div>
        //         {questions[2] != undefined && (
        //             <div>{questions[2].q3}<br/>
        //             {questions[2].a3}</div>
        //         )}

            
        // </div>

    )
}


export default Blog;