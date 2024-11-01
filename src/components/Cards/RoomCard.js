import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./RoomCard.module.css";
import GreenButton from "../Buttons/GreenButton";
import { useNavigate } from "react-router-dom";
const RoomCard = ({ picture, title, text, subtitle, route, fallbackSrc }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  const handleImageError = (e) => {
    e.target.src = fallbackSrc; 
  };  
  return (
    <Col xs={12} sm={6} lg={4} className="p-1">
      <Card className={`${styles.roomcard}`}>
        <Card.Img
          variant="top"
          src={picture}
          className={`${styles.img} image-fluid`}
          onError={handleImageError}
        />
        <Card.Body className={`${styles.body}`}>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <GreenButton
            onClick={handleClick}
            className={`${styles.button}`}
          >
            View Room
          </GreenButton>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
