import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/blog.css";

const About = () => {
    return(
        <Container>
            <Row>
                <Col className="about-title">About Me</Col>
            </Row>
            <Row>
                <Col className="about-sub">Awesome Inc. Full-Stack Web Developer Bootcamp Graduate.</Col>
            </Row>

            <Row>
                <Col className="about-desc">All of my life I've been deeply involved with computers and while growing up, I watched my father build many of them. 
                I can still remember our first computer with MS-DOS. There was a concentration memory card game that I was fascinated with and this is the first 
                memory I have that started my passion for technology that I carried with me throughout the years. At 16, I started working in a restaurant and 
                fell into the loop of being comfortable. I have more than fifteen years of experience in Hospitality, Food and Beverage Service and Guest 
                Relations with five years in Restaurant Management. At the end of 2021, I decided to pursue a passion that hasn't left since I've been 
                a child, step outside of my comfort zone and leave everything I've ever known. This leap of faith led me to Awesome Inc. Bootcamp to 
                study Full Stack Development. While attending Awesome Inc, the technologies studied were HTML, CSS, JavaScript, Python, SQL, React and Django. After Bootcamp, I was hired
                at Apax Software in Lexington, KY as a Software QA Specialist. At the moment, I am focused on futhering my knowledge in JavaScript, React and Django.</Col>
            </Row>
        </Container>
    )
}

export default About;