import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton";
import { Link } from "react-router-dom";
import "./LogOut.css";
import { ProfileContext } from "../../contexts/ProfileContext";

const LogOut = () => {
  const { setIsSignedIn } = useContext(ProfileContext);

  const logOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem("isSignedIn");
  };

  return (
    <Container className="logout" fluid>
      <h1 className="logout-title">Log Out</h1>
      <p className="logout-p">Are you sure you want to log out?</p>
      <Row>
        <TransparentButton
          onClick={logOut}
          as={Link}
          to={"/"}
          style={{ backgroundColor: "#800020", marginBottom: "1rem" }}
        >
          Yes
        </TransparentButton>
        <TransparentButton
          as={Link}
          to={"/"}
          style={{ backgroundColor: "#455d58" }}
        >
          Cancel
        </TransparentButton>
      </Row>
      <h1 className="logout-title">Thank You For Visiting Us!</h1>
      <p className="logout-p">We hope to see you again soon.</p>
    </Container>
  );
};

export default LogOut;
