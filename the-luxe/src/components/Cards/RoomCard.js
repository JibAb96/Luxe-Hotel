import React from "react";
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col";
import "./RoomCard.module.css"
import TransparentButton from "../Buttons/TransparentButton";
import { useNavigate } from "react-router-dom"
const RoomCard = ({picture, title, text, subtitle, route}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route)
  }
  return(
    <Col xs={12} sm={6} lg={4} className="p-1">
      <Card className="card" >
        <Card.Img  
          variant="top" 
          src={picture} 
          className="image-fluid" 
          style={{height: '40vh', 
              objectFit: "cover"}}
        />
        <Card.Body className="card-body" style={{minHeight:"20rem"}}>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
          <Card.Text>
            {text}
          </Card.Text>
          <TransparentButton 
            style={{position:"absolute", bottom:"1rem", left:"28%"}}
            onClick={handleClick}
            >
              View Room
          </TransparentButton>
        </Card.Body>
      </Card>
    </Col>
    )   
}

export default RoomCard