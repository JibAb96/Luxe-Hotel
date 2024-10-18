import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Lobby from "../../images/Hotel-lobby.jpg";
import "./Location.css";
const Location = () => {
  return (
    <div className="info">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="description">
            <p className="info-text text-green">
              Nestled in the heart of <span className="city">Luxembourg</span>,
              our luxury hotel offers an unparalleled blend of elegance,
              comfort, and sophistication, designed for the discerning traveler.
              Each room and suite is a haven of opulence, featuring panoramic
              views of the charming cityscape and lush green landscapes, adorned
              with bespoke furnishings and plush amenities.{" "}
            </p>
            <p className="info-text text-green">
              Whether you're here for business or leisure, our dedicated
              concierge service is Experience the epitome of luxury and European
              charm in the vibrant city of Luxembourg.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image src={Lobby} className="hotel-lobby" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Location;
