import React, { useContext, useEffect, useState } from "react";
import { Form, Card, Row, Alert } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import styles from "./Book.module.css";
import FormInput from "../Form/Input";
import { ProfileContext } from "../../contexts/ProfileContext";
import { AlertContext } from "../../contexts/Alert";
import { useNavigate } from "react-router-dom";
import { parseISO, formatISO } from "date-fns";

const prices = { standard: 120, deluxe: 150, suite: 200 };

const Book = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const [guests, setGuests] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { profileData } = useContext(ProfileContext);
  const { showAlertWithTimeout, showAlert, alertMessage, alertStyle } =
    useContext(AlertContext);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateDaysBetween = (checkIn, checkOut) =>
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24);

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
    const checkInDate = checkIn ? parseISO(checkIn) : null;
    const checkOutDate = checkOut ? parseISO(checkOut) : null;

    const utcCheckIn = formatISO(checkInDate);
    const utcCheckOut = formatISO(checkOutDate);

    if (!validateForm(checkInDate, checkOutDate, roomType, guests)) {
      return;
    }

    const price = prices[roomType] * calculateDaysBetween(checkIn, checkOut);

    const formData = {
      checkIn: [utcCheckIn],
      checkOut: [utcCheckOut],
      roomType,
      guests,
      price,
    };

    const apiURL = process.env.REACT_APP_API_BASE_URL;
    try {
      const response = await fetch(`${apiURL}/book/${profileData.id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data && data.id) {
        navigate(`/confirm-booking/${data.id}`);
        showAlertWithTimeout("Your booking was successful!", "alert-success");
      } else {
        showAlertWithTimeout(
          "There was an error making your booking.",
          "alert-danger",
        );
      }
    } catch (error) {
      console.error(error.message);
      showAlertWithTimeout("There was an error making your booking");
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
      <Card className={`${styles.card}`}>
        <Form
          className={`shadow p-4 rounded ${styles.form}`}
          onSubmit={handleSubmit}
        >
          <h1 className="h4 mb-2 text-center">Book Your Stay</h1>

          <FormInput
            label={"Check-in"}
            type={"date"}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <FormInput
            label={"Check-out"}
            type={"date"}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
          <Form.Group className="mb-2" controlId="Room-Type">
            <Form.Label>Room Category</Form.Label>
            <Form.Select
              aria-label="Room-Type"
              as="select"
              onChange={(e) => setRoomType(e.target.value)}
              required
            >
              <option></option>
              <option value="standard">
                STANDARD || Bed: DOUBLE - Guests: 2 || Price: €120
              </option>
              <option value="deluxe">
                DELUXE || Bed: QUEEN - Guests: 2 || Price: €150
              </option>
              <option value="suite">
                SUITE ||Bed: KING - Guests: 4 || Price: €200
              </option>
            </Form.Select>
          </Form.Group>
          <FormInput
            label={"Guests"}
            type={"number"}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />
          <Row className="d-flex justify-content-center">
            <GreenButton
              type="submit"
              className={`${styles.button}`}
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

export default Book;
