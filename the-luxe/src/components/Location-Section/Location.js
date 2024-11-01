import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Lobby from "../../images/Hotel-lobby-TPNG.webp"
import LobbyJPG from "../../images/Hotel-lobby-TPNG.jpg";
import styles from "./Location.module.css";
import OptimizedImage from "../Optimized-Image/OptimizedImage";
const Location = () => {
  return (
    <div className={`${styles.info}`}>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className={`${styles.description}`}>
            <p className={`${styles.text}`}>
              Nestled in the heart of <span className={`${styles.city}`}>Luxembourg</span>,
              our luxury hotel offers an unparalleled blend of elegance,
              comfort, and sophistication, designed for the discerning traveler.
              Each room and suite is a haven of opulence, featuring panoramic
              views of the charming cityscape and lush green landscapes, adorned
              with bespoke furnishings and plush amenities.{" "}
            </p>
            <p className={`${styles.text}`}>
              Whether you're here for business or leisure, our dedicated
              concierge service is Experience the epitome of luxury and European
              charm in the vibrant city of Luxembourg.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <OptimizedImage 
              src={Lobby} 
              className={`${styles.lobby}`}
              fallbackSrc={LobbyJPG}
              alt={"Hotel Lobby"}
              rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
