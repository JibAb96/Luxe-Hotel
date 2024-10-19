import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reserve-Section.css";
import GreenButton from "../Buttons/GreenButton";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

const ReserveSection = () => {
  const { isSignedIn } = useContext(ProfileContext);

  return (
    <Container className="reservations" fluid>
      <h1 className="reservation-title">Manage Your Booking</h1>
      <Row className="d-flex justify-content-center p-5 ">
        <TextCard
          className={"reservation-card"}
          Title={"1. Review Details"}
          Text={"View details of your reservation."}
        />
        <TextCard
          className={"reservation-card"}
          Title={"2. Modify Reservations"}
          Text={"Make changes to your reservation."}
        />

        <TextCard
          className={"reservation-card"}
          Title={"3. Cancel Reservations"}
          Text={"Cancel your existing booking up to 24h before check in."}
        />
      </Row>
      <Row>
        {isSignedIn ? (
          <>
            <GreenButton
              className={"reserve-s-button"}
              as={Link}
              to={"/reservations"}
            >
              Your Reservations
            </GreenButton>
          </>
        ) : (
          <>
            <GreenButton
              className={"reserve-s-button"}
              as={Link}
              to={"/signin"}
            >
              Your Reservations
            </GreenButton>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ReserveSection;
