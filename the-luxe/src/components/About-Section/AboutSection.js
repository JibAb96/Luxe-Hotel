import React from "react";
import "./AboutSection.css"
import { Col, Row } from "react-bootstrap";
import Reception from "../../images/hotel-reception-2.webp";
import ReceptionJPG from "../../images/hotel-reception-2.jpg"
import OptimizedImage from "../Optimized-Image/OptimizedImage";

const AboutSection = () => {
    return(
        <Row className="about">
          <Col xs={12} md={6}>
            <p className="about-us-p">
              Located in Luxembourg, our luxury hotel offers an exquisite escape
              for discerning travelers. With elegantly designed rooms, world-class
              amenities, and personalized service, we cater to guests seeking the
              ultimate in comfort and sophistication. Whether visiting for leisure
              or business, our hotel combines modern luxury with the charm of
              Luxembourg’s rich heritage, creating an unforgettable experience.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <OptimizedImage 
              className="about-img" 
              src={Reception}
              alt="Hotel Reception" 
              fluid
              fallbackSrc={ReceptionJPG} 
            />
          </Col>
        </Row>
    )
}

export default AboutSection