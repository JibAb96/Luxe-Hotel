import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";
import GreenButton from "../Buttons/GreenButton";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

const Hero = () => {
  const { isSignedIn } = useContext(ProfileContext);
  return (
    <Container className={`${styles.container}`} fluid>
      <Row className={`${styles.box}`}>
        <h1 className={`${styles.text}`}>
          <span>Luxury</span>
          <span>Comfort</span>
        </h1>
        {isSignedIn ? (
          <GreenButton
            as={Link}
            to={"/book"}
            className={`${styles.button}`}
          >
            Book a Room
          </GreenButton>
        ) : (
          <GreenButton
            as={Link}
            to={"/signin"}
            className={`${styles.button}`}
          >
            Book a Room
          </GreenButton>
        )}
      </Row>
    </Container>
  );
};

export default Hero;
