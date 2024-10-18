import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";
import TransparentButton from "../Buttons/TransparentButton";
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
          <TransparentButton
            as={Link}
            to={"/book"}
            style={{ marginLeft: "1rem" }}
          >
            Book a Room
          </TransparentButton>
        ) : (
          <TransparentButton
            as={Link}
            to={"/signin"}
            style={{ marginLeft: "1rem" }}
          >
            Book a Room
          </TransparentButton>
        )}
      </Row>
    </Container>
  );
};

export default Hero;
