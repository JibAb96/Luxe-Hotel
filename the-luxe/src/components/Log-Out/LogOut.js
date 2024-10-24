import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import { Link } from "react-router-dom";
import "./LogOut.css";
import { ProfileContext } from "../../contexts/ProfileContext";

const LogOut = () => {
  const { logOutUser } = useContext(ProfileContext);

  return (
    <Container className="logout" fluid>
      <h1 className="logout-title">Log Out</h1>
      <p className="logout-p">Are you sure you want to log out?</p>
      <Row>
        <GreenButton
          onClick={logOutUser}
          as={Link}
          to={"/"}
          className={"logout-button"}
        >
          Log Out
        </GreenButton>
        <GreenButton
          as={Link}
          to={"/"}
        >
          Cancel
        </GreenButton>
      </Row>
      <h1 className="logout-title">Thank You For Visiting Us!</h1>
      <p className="logout-p">We hope to see you again soon.</p>
    </Container>
  );
};

export default LogOut;
