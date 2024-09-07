import React from "react";
import Card from "react-bootstrap/Card"
import { Button } from "react-bootstrap";
const RoomCard = ({picture, title, text}) => {
 return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
        </Card.Text>
        <Button variant="primary">View Room</Button>
        </Card.Body>
    </Card>
  )   
}

export default RoomCard