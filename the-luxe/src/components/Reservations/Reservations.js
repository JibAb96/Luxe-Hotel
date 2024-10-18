import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reservations.css";
import TransparentButton from "../Buttons/TransparentButton";
import { ProfileContext } from "../../contexts/ProfileContext";
import { AlertContext } from "../../contexts/Alert";
import EditBooking from "../Edit-Booking/EditBooking";
import CancelBooking from "../Cancel-Booking/CancelBooking";
import Loader from "../Spinner/Spinner";
import { format, parseISO } from "date-fns";

const Reservations = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [showEditBooking, setShowEditBooking] = useState(false);
  const [showCancelBooking, setShowCancelBooking] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [haveReservations, setHaveReservations] = useState(false);

  const { profileData } = useContext(ProfileContext);
  const { showAlert, alertMessage, alertStyle } = useContext(AlertContext);

  useEffect(() => {
    if (!profileData.id) {
      return;
    }
    const fetchBookings = async () => {
      const apiURL = process.env.REACT_APP_API_BASE_URL;

      try {
        const response = await fetch(
          `${apiURL}/reservations/${profileData.id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
        setHaveReservations(data.length > 0);
      } catch (error) {
        console.error(error);
        setHaveReservations(false);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [profileData.id, haveReservations]);

  // Callback function to update bookings
  const handleUpdateBooking = (updatedBooking) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === updatedBooking.id ? updatedBooking : booking,
      ),
    );
    setShowEditBooking(false); // Close edit form
  };

  const handleCancelledBooking = (deleteBooking) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== deleteBooking.id,
    );
    setBookings(updatedBookings);
    if (!updatedBookings.length > 0) {
      setHaveReservations(false);
    }
    console.log("inside:", haveReservations);
  };

  const handleEditSwitch = (booking) => {
    setSelectedBooking(booking);
    setShowEditBooking(!showEditBooking);
  };
  const handleCancelSwitch = (booking) => {
    setSelectedBooking(booking);
    setShowCancelBooking(!showCancelBooking);
  };

  if (loading) {
    return <Loader />;
  }

  if (!haveReservations) {
    return (
      <Container>
        {showAlert && (
          <Alert className={`alert ${alertStyle}`} role="alert">
            {alertMessage}
          </Alert>
        )}
        <Row className="d-flex justify-content-center">
          <h1 className="page-heading">Your Reservations</h1>
        </Row>
        <div className="text-center p-5 m-5">
          <p>You don't have any reservations.</p>
          <p>
            Check out our rooms and book your stay{" "}
            <a href="http://localhost:3001/rooms">here</a>.
          </p>
        </div>
      </Container>
    );
  }

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "yyyy-MM-dd");
  };

  return (
    <Container style={{ padding: "1rem" }} fluid>
      {showAlert && (
        <Alert className={`alert ${alertStyle}`} role="alert">
          {alertMessage}
        </Alert>
      )}
      <Row className="d-flex justify-content-center">
        <h1 className="page-heading">Your Reservations</h1>
      </Row>
      <Row
        className="d-flex justify-content-center"
        style={{ padding: "2rem 0 7rem" }}
      >
        {bookings.map((booking, index) => (
          <TextCard
            key={index}
            titleClass={"heading"}
            Title={booking.room_type}
            Text={
              <>
                <p>
                  <span className="bold">Booking Id:</span> {booking.id}
                </p>
                <p>
                  <span className="bold">Check-In:</span>{" "}
                  {formatDate(booking.check_in)}
                </p>
                <p>
                  <span className="bold">Check-Out:</span>{" "}
                  {formatDate(booking.check_out)}
                </p>
                <p>
                  <span className="bold">Guests:</span> {booking.guests}
                </p>
                <p>
                  <span className="bold">Total-price:</span> €{booking.price}
                </p>
              </>
            }
            Element={
              <div>
                <TransparentButton
                  style={{ minWidth: "7rem", backgroundColor: "#455d58" }}
                  onClick={() => handleEditSwitch(booking)}
                >
                  Edit
                </TransparentButton>
                <TransparentButton
                  style={{ minWidth: "7rem", backgroundColor: "#455d58" }}
                  onClick={() => handleCancelSwitch(booking)}
                >
                  Cancel
                </TransparentButton>
              </div>
            }
            style={{ margin: ".5rem" }}
          />
        ))}
        {showEditBooking && (
          <div className="overlay-r">
            <EditBooking
              booking={selectedBooking}
              handleExit={handleEditSwitch}
              onUpdate={handleUpdateBooking}
            />
          </div>
        )}
        {showCancelBooking && (
          <div className="overlay-r">
            <CancelBooking
              booking={selectedBooking}
              handleExit={handleCancelSwitch}
              onDeletion={handleCancelledBooking}
            />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Reservations;
