import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reservations.css"
import TransparentButton from "../Buttons/TransparentButton";
import { ProfileContext } from "../../contexts/ProfileContext";
import { AlertContext } from "../../contexts/Alert";
import EditBooking from "../Edit-Booking/EditBooking";
import CancelBooking from "../Cancel-Booking/CancelBooking";

const Reservations = () => {
    const [bookings, setBookings] = useState([]);
    const [showEditBooking, setShowEditBooking] = useState(false);
    const [showCancelBooking, setShowCancelBooking] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const { profileData } = useContext(ProfileContext)
    const { showAlert, alertMessage, alertStyle } = useContext(AlertContext)

    useEffect(() => {
        if (!profileData.id) { return; }
        const fetchBookings = async () => {
            try {
                const response = await fetch(`http://localhost:3000/reservations/${profileData.id}`)
                if (!response.ok) {
                    throw new Error("Failed to fetch bookings")
                }
                const data = await response.json();
                const bookingsWithLocalDates = data.map(booking => ({
                    ...booking,
                    check_in: new Date(booking.check_in).toLocaleDateString(), 
                    check_out: new Date(booking.check_out).toLocaleDateString(), 
                }));
                setBookings(bookingsWithLocalDates);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchBookings();
    }, [profileData.id])

    // Callback function to update bookings
    const handleUpdateBooking = (updatedBooking) => {
        setBookings(prevBookings => prevBookings.map(booking =>
            booking.id === updatedBooking.id ? updatedBooking : booking
        ));
        setShowEditBooking(false); // Close edit form
    }

    const handleCancelledBooking = (deleteBooking) => {
        console.log(bookings)
        console.log(deleteBooking.id)
        const updatedBookings = bookings.filter(booking => booking.id !== deleteBooking.id)
        setBookings(updatedBookings)
        console.log(updatedBookings)
    }

    const handleEditSwitch = (booking) => {
        setSelectedBooking(booking);
        setShowEditBooking(!showEditBooking);
    }
    const handleCancelSwitch = (booking) => {
        setSelectedBooking(booking);
        setShowCancelBooking(!showCancelBooking);
    }

    return (
        <Container style={{ padding: "1rem" }} fluid>
            {showAlert && <Alert className={`alert ${alertStyle}`} role="alert">{alertMessage}</Alert>}
            <Row className="d-flex justify-content-center">
                <h1 className="page-heading">Your Reservations</h1>
            </Row>
            <Row className="d-flex justify-content-center" style={{ padding: "2rem 0 7rem" }}>
                {bookings.map((booking, index) => (
                    <TextCard
                        key={index}
                        titleClass={"heading"}
                        Title={booking.room_type}
                        Text={
                            <>
                                <p><span className="bold">Booking Id:</span> {booking.id}</p>
                                <p><span className="bold">Check-In:</span> {new Date(booking.check_in).toLocaleDateString('sv-SE')}</p>
                                <p><span className="bold">Check-Out:</span> {new Date(booking.check_out).toLocaleDateString('sv-SE')}</p>
                                <p><span className="bold">Guests:</span> {booking.guests}</p>
                                <p><span className="bold">Total-price:</span> €{booking.price}</p>
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
                )}{
                    showCancelBooking && (
                    <div className="overlay-r">
                        <CancelBooking 
                            booking={selectedBooking}  
                            handleExit={handleCancelSwitch}
                            onDeletion={handleCancelledBooking}
                        />
                    </div>
                    )
                }
            </Row>
        </Container>
    );
};

export default Reservations;
