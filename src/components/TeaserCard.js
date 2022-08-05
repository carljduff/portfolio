import React from "react";
import "../css/port.css"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TeaserCard = ({t_id, t_title, t_date, t_desc}) => {
 




    return(
      

<Container>
    
<Row>
  <Col className="teaser-title" md={{ span: 7}}>{t_title}</Col>
</Row>
<Row>
  <Col className="teaser-date" md={{ span: 5, offset: 0 }}>{t_date}</Col>
</Row>
<Row>
  <Col className="teaser-desc" md={{ span: 9, offset: 0 }}>{t_desc}</Col>
</Row>
<Row>
  <Col md={{ span: 4, offset: 0 }}><button className="view-btn-teaser"><Link to={`${t_id}`}>View</Link></button></Col>
</Row>
{/* <div>
<Link to={`${t_id}`}><button className="view-btn-teaser">View</button></Link>
</div> */}
<Row>
  <Col md={{ span: 4, offset: 0 }}><hr/></Col>
</Row>
</Container>
 
        
    
    )
}


export default TeaserCard;