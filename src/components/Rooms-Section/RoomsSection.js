import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OptimizedImage from "../Optimized-Image/OptimizedImage"
import Room from "../../images/hotel-room-TPNG.webp"
import RoomBackUp from "../../images/hotel-room-TPNG.jpg";
import GreenButton from "../Buttons/GreenButton";
import styles from "./RoomsSection.module.css";
import { Link } from "react-router-dom";
const RoomsSection = () => {
  return (
    <Container className={styles.container} fluid>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <OptimizedImage 
            src={Room} 
            fallbackSrc={RoomBackUp} 
            alt={"Hotel Room"} 
            className={styles.img}
            rounded/>
        </Col>
        <Col className={styles.box} xs={12} md={6}>
          <h2 className={styles.title}>ROOMS</h2>
          <p className={styles.text}>
            Experience the ultimate in comfort and elegance in our luxury hotel
            rooms. Each room is designed with sophisticated décor, high-end
            furnishings, and modern amenities, providing a serene escape from
            the ordinary.
          </p>
          <GreenButton as={Link} to={"/rooms"}>
            Explore Now
          </GreenButton>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomsSection;
