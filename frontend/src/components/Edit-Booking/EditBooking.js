import React, { useContext, useEffect, useState } from "react";
import { Form, Card, Row, Alert } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import styles from "./EditBooking.module.css";
import FormInput from "../Form/Input";
import { AlertContext } from "../../contexts/Alert";

const EditBooking = ({ booking, handleExit, onUpdate }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const [guests, setGuests] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { showAlertWithTimeout, showAlert, alertMessage, alertStyle } = useContext(AlertContext);

  useEffect(() => {
    setCheckIn(booking.check_in);
    setCheckOut(booking.check_out);
    setRoomType(booking.room_type);
    setGuests(booking.guests);
  }, [booking]);

  const prices = { standard: 120, deluxe: 150, suite: 200 };

  const calculateDaysBetween = (checkIn, checkOut) =>
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24);

  const formatDateForInput = (date) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return "";
    }
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedCheckIn = formatDateForInput(checkIn);
  const formattedCheckOut = formatDateForInput(checkOut);

  const validateForm = (checkIn, checkOut, roomType, guests) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
      setIsLoading(false);

      showAlertWithTimeout("Please provide valid dates.", "alert-danger");
      return false;
    }

    if (checkIn >= checkOut) {
      setIsLoading(false);
      showAlertWithTimeout(
        "Check-in date must be before check-out date.",
        "alert-danger",
      );
      return false;
    }

    if (checkIn < currentDate) {
      setIsLoading(false);
      showAlertWithTimeout(
        "Check-in date cannot be in the past",
        "alert-danger",
      );
      return false;
    }

    if ((roomType === "deluxe" || roomType === "standard") && guests > 2) {
      setIsLoading(false);
      showAlertWithTimeout(
        "Maximum guests for selected room is 2",
        "alert-danger",
      );
      return false;
    } else if (guests > 4) {
      setIsLoading(false);
      showAlertWithTimeout("Maximum guests for the suite is 4", "alert-danger");
      return false;
    } else if (guests <= 0) {
      setIsLoading(false);
      showAlertWithTimeout(
        "Please state how many guests this booking is for",
        "alert-danger",
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const utcCheckIn = checkInDate.toISOString();
    const utcCheckOut = checkOutDate.toISOString();

    if(!validateForm(checkInDate, checkOutDate, roomType, guests)){
      return
    }

    const price = prices[roomType] * calculateDaysBetween(checkIn, checkOut);

    const formData = {
      checkIn: utcCheckIn,
      checkOut: utcCheckOut,
      roomType,
      guests,
      price,
    };

    const apiURL = process.env.REACT_APP_API_BASE_URL;

    try {
      
      const response = await fetch(`${apiURL}/edit-booking/${booking.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        handleExit();
        return showAlertWithTimeout(
          data.message || "There was an error making your booking.",
          "alert-danger",
        );
      }

      // Trigger the onUpdate callback with the updated booking
      const updatedBooking = {
        ...booking,
        check_in: checkIn,
        check_out: checkOut,
        room_type: roomType,
        guests,
        price,
      };
      onUpdate(updatedBooking);
      showAlertWithTimeout("Your booking was successfully updated!", "alert-success");
    } catch (error) {
      handleExit();
      console.error(error.message);
      showAlertWithTimeout(
        "There was an error making your booking",
        "alert-danger",
      );
    } finally{
      setIsLoading(false);
    }
  };

  return (
    <div>
      {showAlert && (
          <Alert className={`alert ${alertStyle}`} role="alert">
            {alertMessage}
          </Alert>
        )}
      <Card className={styles.card}>
        <Form
          className={`shadow p-4 rounded ${styles.form}`}
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            className={styles.exit}
            onClick={handleExit}
            aria-label="Close"
          >
            &times;
          </button>
          <h1 className="h4 mb-2 text-center">Edit Your Booking</h1>
          <FormInput
            label={"Check-in"}
            type={"date"}
            value={formattedCheckIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <FormInput
            label={"Check-out"}
            type={"date"}
            value={formattedCheckOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <Form.Group className="mb-2" controlId="Room-Type">
            <Form.Label>Room Category</Form.Label>
            <Form.Select
              aria-label="Room-Type"
              as="select"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              required
            >
              <option></option>
              <option value="standard">
                STANDARD || Bed: DOUBLE - Guests: 4 || Price: €120
              </option>
              <option value="deluxe">
                DELUXE || Bed: QUEEN - Guests: 2 || Price: €150
              </option>
              <option value="suite">
                SUITE || Bed: KING - Guests: 4 || Price: €200
              </option>
            </Form.Select>
          </Form.Group>
          <FormInput
            label={"Guests"}
            type={"number"}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
          <Row className="d-flex justify-content-center">
            <GreenButton
              type="submit"
              className={"m-1"}
              disabled={isLoading}
            >
              {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Booking...
                  </>
                  ) : (
                  'Book'
                  )}
            </GreenButton>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default EditBooking;
