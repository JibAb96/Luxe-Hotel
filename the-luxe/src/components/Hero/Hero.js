import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";
import GreenButton from "../Buttons/GreenButton";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

const Hero = () => {
  const { isSignedIn } = useContext(ProfileContext);
  return (
    <Container className="hero" fluid>
      <Row className="hero__text-box">
        <h1 className="hero__text">
          <span>Luxury</span>
          <span>Comfort</span>
        </h1>
        {isSignedIn ? (
          <GreenButton
            as={Link}
            to={"/book"}
            className={"hero-button"}
          >
            Book a Room
          </GreenButton>
        ) : (
          <GreenButton
            as={Link}
            to={"/signin"}
            className={"hero-button"}
          >
            Book a Room
          </GreenButton>
        )}
      </Row>
    </Container>
  );
};

export default Hero;
