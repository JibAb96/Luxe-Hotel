import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import { Link } from "react-router-dom";
import styles from "./LogOut.module.css";
import { ProfileContext } from "../../contexts/ProfileContext";

const LogOut = () => {
  const { logOutUser } = useContext(ProfileContext);

  return (
    <Container className={`${styles.container}`} fluid>
      <h1 className={`${styles.title}`}>Log Out</h1>
      <p className={`${styles.paragraph}`}>Are you sure you want to log out?</p>
      <GreenButton
        onClick={logOutUser}
        as={Link}
        to={"/"}
        className={`${styles.button} ${styles.width}`}
      >
        Log Out
      </GreenButton>
      <GreenButton
        as={Link}
        to={"/"}
        className={`${styles.width}`}
      >
        Cancel
      </GreenButton>
      <h1 className={`${styles.title}`}>Thank You For Visiting Us!</h1>
      <p className={`${styles.paragraph}`}>We hope to see you again soon.</p>
    </Container>
  );
};

export default LogOut;
