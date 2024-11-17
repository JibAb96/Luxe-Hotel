import React from "react";
import Hero from "../Hero/Hero";
import Location from "../Location-Section/Location";
import RoomsSection from "../Rooms-Section/RoomsSection";
import Reviews from "../Reviews/Reviews";
import { useEffect, useContext } from "react";
import { AlertContext } from "../../contexts/Alert";
import { Alert } from "react-bootstrap";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { alertMessage, showAlert } = useContext(AlertContext);
  return (
    <div>
      {showAlert && (
        <Alert className="alert alert-success" role="alert">
          {alertMessage}
        </Alert>
      )}
      <Hero />
      <Location />
      <RoomsSection />
      <Reviews />
    </div>
  );
};

export default LandingPage;
