import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import { AlertContext } from "../../contexts/Alert";
import "./CancelBooking.css";

const CancelBooking = ({ booking, handleExit, onDeletion }) => {
  const { showAlertWithTimeout } = useContext(AlertContext);

  const deleteBooking = async () => {
    const apiURL = process.env.REACT_APP_API_BASE_URL;
    try {
      const response = await fetch(`${apiURL}/delete-booking/${booking.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking");
      }

      const data = await response.json();
      if (data === "Booking was deleted successfully") {
        handleExit();
        onDeletion(booking);
        showAlertWithTimeout(
          "You have successfully deleted your booking!",
          "alert-success",
        );
      } else {
        handleExit();
        showAlertWithTimeout(
          "An error occurred. Please try again.",
          "alert-danger",
        );
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      showAlertWithTimeout(
        "An error occurred. Please try again.",
        "alert-danger",
      );
      handleExit();
    }
  };

  return (
    <Container className="delete-booking" fluid>
      <button
        type="button"
        className="leave-button"
        onClick={handleExit}
        aria-label="Close modal"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h1 className="delete-booking-title">Cancel Reservation</h1>
      <p>
        Are you sure you want to delete your
        <span className="bold"> Reservation</span>?
      </p>
      <Row>
        <GreenButton
          onClick={deleteBooking}
          className={"delete-button"}
        >
          Delete
        </GreenButton>
        <GreenButton
          onClick={handleExit}
        >
          Keep
        </GreenButton>
      </Row>
      <h2 className="delete-booking-title"> We are sorry to see you go!</h2>
      <p>
        If there is anything we can do to assist you in the future, please
        don't hesitate to reach out.
      </p>
    </Container>
  );
};

export default CancelBooking;
