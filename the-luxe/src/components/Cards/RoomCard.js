import React from "react";
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
const RoomCard = ({picture, title, text}) => {
 return(
  <Col md={4} sm={6} xs={12}>
    <Card >
      <Card.Img  
        variant="top" 
        src={picture} 
        className="image-fluid" 
        style={{height: '40vh', 
            objectFit: "cover"}}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">View Room</Button>
      </Card.Body>
    </Card>
  </Col>
  )   
}

export default RoomCard