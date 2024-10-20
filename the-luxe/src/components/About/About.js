import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import AboutSection from "../About-Section/AboutSection";
import DiningSection from "../Dining-Section/Dining-Section";
import ReserveSection from "../Reserve-Section/Reserve-Section";

const About = ({ isSignedIn }) => {
  return (
    <Container fluid>
      <h1 className="about-us">About us</h1>
      <section>
        <AboutSection />
      </section>
      <section>  
        <Row>
          <DiningSection />
        </Row>
       </section> 
      <section>  
        <Row>
          <ReserveSection isSignedIn={isSignedIn} />
        </Row>
      </section> 
    </Container>
  );
};

export default About;
