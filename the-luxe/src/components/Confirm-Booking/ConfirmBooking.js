import React, { useContext, useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";
import "./ConfirmBooking.css";
import TransparentButton from "../Buttons/TransparentButton";
import Loader from "../Spinner/Spinner";
import { format, parseISO } from "date-fns";

const ConfirmBooking = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);
  const { profileData } = useContext(ProfileContext);

  useEffect(() => {
    const fetchBooking = async () => {
      const apiURL = process.env.REACT_APP_API_BASE_URL;
      try {
        const response = await fetch(`${apiURL}/confirm-booking/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch booking");
        }
        const data = await response.json();
        setBooking(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [id]);

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "yyyy-MM-dd");
  };

  if (loading) {
    return <Loader />;
  }

  if (!booking) {
    return (
      <Container className="confirm-booking" fluid>
        <h1 className="confirm-booking-title">Booking Not Found</h1>
        <p>We're sorry, but we couldn't find the booking you're looking for.</p>
      </Container>
    );
  }

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <Container className="confirm-booking" fluid>
      <h1 className="confirm-booking-title">Booking Successful</h1>
      <p>Thanks for booking with us, {profileData.first_name}!</p>
      <p>
        Your booking reference is <span className="bold">{booking.id}</span>.
      </p>
      <p>
        You booked a{" "}
        <span className="bold">{capitalize(booking.room_type)}</span> room from{" "}
        {formatDate(booking.check_in)} to {formatDate(booking.check_out)} for{" "}
        {booking.guests} guests.
      </p>
      <p>Total price: €{booking.price}</p>
      <h2 className="confirm-booking-title">
        We look forward to welcoming you to our hotel!
      </h2>
      <p className="fw-bold">Check-in time is at 15:00 (3PM)</p>
      <p>If you have any questions or need any support, please contact us!</p>
      <p>We hope you'll enjoy your stay!</p>
      <p>
        You can view your booking{" "}
        <a href={`http://localhost:3001/reservations/${id}`}>here</a>.
      </p>
      <Col>
        <TransparentButton
          style={{ backgroundColor: "#455d58" }}
          as={Link}
          to={"/"}
        >
          Homepage
        </TransparentButton>
        <TransparentButton
          style={{ backgroundColor: "#455d58" }}
          as={Link}
          to={`/book/${profileData.id}`}
        >
          Book another
        </TransparentButton>
      </Col>
    </Container>
  );
};

export default ConfirmBooking;
