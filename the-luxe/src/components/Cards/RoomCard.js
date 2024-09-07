import React from "react";
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col";
import "./RoomCard.css"
import TransparentButton from "../Buttons/TransparentButton";
const RoomCard = ({picture, title, text, subtitle}) => {
 return(
  <Col md={4} sm={6} xs={12}>
    <Card className="card-hover" >
      <Card.Img  
        variant="top" 
        src={picture} 
        className="image-fluid" 
        style={{height: '40vh', 
            objectFit: "cover"}}
      />
      <Card.Body style={{height:"17rem", backgroundColor:"#455d58", color:"aliceblue"}}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
        <TransparentButton style={{position:"absolute", bottom:"2vh", left:"28%"}}>View Room</TransparentButton>
      </Card.Body>
    </Card>
  </Col>
  )   
}

export default RoomCard