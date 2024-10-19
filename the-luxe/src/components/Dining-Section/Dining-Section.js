import React from "react";
import Dining from "../../images/hotel-dining.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import "./Dining-Section.css";
import { Link } from "react-router-dom";

const DiningSection = () => {
  return (
    <Container className="dining" fluid>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image src={Dining} className="dining-img" rounded />
        </Col>
        <Col className="dining-text-box" xs={12} md={6}>
          <h2 className="dining-headline">Dining</h2>
          <p className="dining-text">
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
