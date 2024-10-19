import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton";
import { AlertContext } from "../../contexts/Alert";
import "./CancelBooking.css";

const CancelBooking = ({ booking, handleExit, onDeletion }) => {
  const { showAlertWithTimeout } = useContext(AlertContext);

  const deleteBooking = async () => {
    const apiURL = process.env.REACT_APP_API_BASE_URL;
    try {
      const response = await fetch(`${apiURL}/delete-booking/${booking.id}`, {
        method: "DELETE",
      });
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
      console.error("Error logging in:", error);
      showAlertWithTimeout(
        "An error occurred. Please try again.",
        "alert-danger",
      );
    }
  };

  return (
    <>
      <Container className="delete-booking" fluid>
        <button
          type="button"
          className="leave-button"
          onClick={handleExit}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="delete-booking-title">Cancel Reservation</h1>
        <p>
          Are you sure you want to delete your
          <span className="bold"> Reservation</span>?
        </p>
        <Row>
          <TransparentButton
            onClick={deleteBooking}
            className={"delete-button"}
          >
            Delete
          </TransparentButton>
          <TransparentButton
            onClick={handleExit}
          >
            Keep
          </TransparentButton>
        </Row>
        <h1 className="delete-booking-title"> We are sorry to see you go!</h1>
        <p>
          If there is anything we can do to assist you in the future, please
          don't hesitate to reach out.
        </p>
      </Container>
    </>
  );
};

export default CancelBooking;
