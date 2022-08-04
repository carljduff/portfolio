import "../css/home.css"
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jordan from "../images/jordan.png"
import git from "../images/github.png"
import linkedin from "../images/linkedin.png"

const Home = () => {

    return(
        <div className="clip">
          
 <Container>
      <Row>
        <Col className="name">Hi, I'm Jordan...</Col>
        <Col className="col"> <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">QA Specialist</div>
                        <div className="i-title-item">Full Stack Web Developer</div>
                        <div className="i-title-item">Life-time Learner</div>
                        <div className="i-title-item">Pianist</div>
                    </div>
                </div></Col>
      </Row>
      <Row>
        <Col className="col"><img className="pic" alt="" src={jordan}/></Col>
      </Row>

      <Row>
        <Col>
        <a href="https://github.com/carljduff" alt=""><img className="git" alt="" src={git}/></a>
        <a href="https://www.linkedin.com/in/carljduff/" alt=""><img className="link" alt="" src={linkedin}/></a>

        
        </Col>
        
      </Row>
    </Container>
        </div>
    )
}

export default Home;