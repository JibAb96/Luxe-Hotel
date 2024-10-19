import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./RoomCard.css";
import GreenButton from "../Buttons/GreenButton";
import { useNavigate } from "react-router-dom";
const RoomCard = ({ picture, title, text, subtitle, route }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  return (
    <Col xs={12} sm={6} lg={4} className="p-1">
      <Card className="room-option">
        <Card.Img
          variant="top"
          src={picture}
          className="image-fluid"
          style={{ height: "40vh", objectFit: "cover" }}
        />
        <Card.Body className="room-option-body">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <GreenButton
            onClick={handleClick}
            className={"room-card-button"}
          >
            View Room
          </GreenButton>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
