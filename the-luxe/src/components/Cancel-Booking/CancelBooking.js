import React, { useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import { AlertContext } from "../../contexts/Alert";
import styles from "./CancelBooking.module.css";

const CancelBooking = ({ booking, handleExit, onDeletion }) => {
  const { showAlertWithTimeout } = useContext(AlertContext);
  
  const [isLoading, setIsLoading] = useState(false);
  
  const deleteBooking = async () => {

    const apiURL = process.env.REACT_APP_API_BASE_URL;
    
    setIsLoading(true);
    
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className={`${styles.container}`} fluid>
      <button
        type="button"
        className={`${styles.exit}`}
        onClick={handleExit}
        aria-label="Close modal"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h1 className={`${styles.title}`}>Cancel Reservation</h1>
      <p>
        Are you sure you want to delete your
        <span className={`${styles.bold}`}> Reservation</span>?
      </p>
      <Row>
        <GreenButton
          onClick={deleteBooking}
          className={`${styles.delete}`}
          disabled={isLoading}
        >
          {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Deleting...
                  </>
                  ) : (
                  'Delete'
                  )}
        </GreenButton>
        <GreenButton
          onClick={handleExit}
          disabled={isLoading}
        >
          Keep
        </GreenButton>
      </Row>
      <h2 className={`${styles.title}`}> We are sorry to see you go!</h2>
      <p>
        If there is anything we can do to assist you in the future, please
        don't hesitate to reach out.
      </p>
    </Container>
  );
};

export default CancelBooking;
