import React, { useContext, useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";
import styles from "./ConfirmBooking.module.css";
import GreenButton from "../Buttons/GreenButton";
import Loader from "../Spinner/Spinner";
import { format, parseISO } from "date-fns";

const ConfirmBooking = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);
  const { profileData } = useContext(ProfileContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!profileData) {
      navigate('/login');
    }
  }, [profileData, navigate]);
  
  useEffect(() => {
    const fetchBooking = async () => {
      const apiURL = process.env.REACT_APP_API_BASE_URL;
      if(!apiURL){
        throw new Error("API URL not configured")
      }
      try {
        const response = await fetch(`${apiURL}/confirm-booking/${id}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch booking");
        }
        if (!data) throw new Error("No booking data received");
        if(profileData.id === data.profile_id){
          setBooking(data)
        };
      } catch (error) {
        console.error('Booking fetch error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [id, profileData]);

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "yyyy-MM-dd");
  };

  if (loading) {
    return <Loader />;
  }

  if (!booking) {
    return (
      <Container className={`${styles.coontainer}`} fluid>
        <h1 className={`${styles.title}`}>Booking Not Found</h1>
        <p>We're sorry, but we couldn't find the booking you're looking for.</p>
      </Container>
    );
  }

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <Container className={`${styles.container}`} fluid>
      <h1 className={`${styles.title}`}>Booking Successful</h1>
      <p>Thanks for booking with us, {profileData.first_name}!</p>
      <p>
        Your booking reference is <span className={`${styles.bold}`}>{booking.id}</span>.
      </p>
      <p>
        You booked a{" "}
        <span className={`${styles.bold}`}>{capitalize(booking.room_type)}</span> room from{" "}
        {formatDate(booking.check_in)} to {formatDate(booking.check_out)} for{" "}
        {booking.guests} guests.
      </p>
      <p>Total price: €{booking.price}</p>
      <h2 className={`${styles.title}`}>
        We look forward to welcoming you to our hotel!
      </h2>
      <p className={`${styles.bold}`}>Check-in time is at 15:00 (3PM)</p>
      <p>If you have any questions or need any support, please contact us!</p>
      <p>We hope you'll enjoy your stay!</p>
      <p>
        You can view your booking{" "}
        <a href={`http://localhost:3001/reservations/${id}`}>here</a>.
      </p>
      <Col>
        <GreenButton
          as={Link}
          to={"/"}
        >
          Homepage
        </GreenButton>
        <GreenButton
          as={Link}
          to={`/book/${profileData.id}`}
        >
          Book another
        </GreenButton>
      </Col>
    </Container>
  );
};

export default ConfirmBooking;
