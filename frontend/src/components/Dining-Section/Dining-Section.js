import React from "react";
import Dining from "../../images/hotel-dining-TPNG.webp";
import DiningJPG from "../../images/hotel-dining-TPNG.jpg"; 
import { Container, Row, Col } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import styles from "./Dining-Section.module.css";
import { Link } from "react-router-dom";
import OptimizedImage from "../Optimized-Image/OptimizedImage";

const DiningSection = () => {
  return (
    <Container className={styles.container} fluid>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <OptimizedImage 
            src={Dining} 
            className={styles.img} 
            fallbackSrc={DiningJPG}
            alt={"Dining Room"}
            rounded />
        </Col>
        <Col className={styles.box} xs={12} md={6}>
          <h2 className={styles.title}>Dining</h2>
          <p className={styles.text}>
            Savor exquisite culinary creations in our elegant dining area.
            Designed with refined décor and offering a selection of gourmet
            dishes, each meal promises an unforgettable gastronomic experience
            in an atmosphere of sophistication and indulgence.
          </p>
          <GreenButton as={Link} to={"/rooms"}>
            Explore Now
          </GreenButton>
        </Col>
      </Row>
    </Container>
  );
};

export default DiningSection;
