import React, { useContext, useEffect, useState } from 'react';
import { Form, Card, Row } from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./EditBooking.css"
import FormInput from '../Form/Input';
import { AlertContext } from '../../contexts/Alert';

const EditBooking = ({ booking, handleExit, onUpdate }) => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomType, setRoomType] = useState("");
    const [guests, setGuests] = useState("");

    const { showAlertWithTimeout } = useContext(AlertContext);

    useEffect(() => {
        setCheckIn(booking.check_in);
        setCheckOut(booking.check_out);
        setRoomType(booking.room_type);
        setGuests(booking.guests);
    }, [booking]);

    const setChange = (e, setState) => {
        setState(e.target.value);
    }

    const prices = { standard: 120, deluxe: 150, suite: 200 };

    const calculateDaysBetween = (checkIn, checkOut) =>
        (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24);

    const formatDateForInput = (date) => {
        const d = new Date(date);
        if (isNaN(d.getTime())) {
            return ''; 
        }
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); 
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const checkInInput = formatDateForInput(checkIn);
    const checkOutInput = formatDateForInput(checkOut);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const utcCheckIn = checkInDate.toISOString(); 
        const utcCheckOut = checkOutDate.toISOString(); 
        
        if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
            showAlertWithTimeout("Please provide valid dates.", "alert-danger");
            return;
        }

        if (checkInDate >= checkOutDate) {
            showAlertWithTimeout("Check-in date must be before check-out date.", "alert-danger");
            return;
        }

        const price = prices[roomType] * calculateDaysBetween(checkIn, checkOut);

        const formData = { 
            checkIn: utcCheckIn, 
            checkOut: utcCheckOut, 
            roomType, 
            guests, 
            price 
        };

        const apiURL = process.env.REACT_APP_API_BASE_URL

        try {
            const response = await fetch(`${apiURL}/edit-booking/${booking.id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                handleExit();
                return showAlertWithTimeout("There was an error making your booking.", "alert-danger");
            }

            // Trigger the onUpdate callback with the updated booking
            const updatedBooking = { ...booking, check_in: checkIn, check_out: checkOut, room_type: roomType, guests, price };
            onUpdate(updatedBooking);
            showAlertWithTimeout("Your booking was successful!", "alert-success");
        } catch (error) {
            handleExit();
            console.error(error.message);
            showAlertWithTimeout("There was an error making your booking", "alert-danger");
        }
    }

    return (
        <div>
            <Card className="edit-booking">
                <Form className="shadow p-4 rounded edit-booking-form" onSubmit={handleSubmit}>
                    <button 
                        type="button" 
                        className="x-button" 
                        onClick={handleExit} 
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <h1 className="h4 mb-2 text-center">Edit Your Booking</h1>
                    <FormInput
                        label={"Check-in"}
                        type={"date"}
                        value={checkInInput}
                        onChange={(e) => setChange(e, setCheckIn)}
                        required
                    />
                    <FormInput
                        label={"Check-out"}
                        type={"date"}
                        value={checkOutInput}
                        onChange={(e) => setChange(e, setCheckOut)}
                        required
                    />
                    <Form.Group className="mb-2" controlId="Room-Type">
                        <Form.Label>Room Category</Form.Label>
                        <Form.Select
                            aria-label="Room-Type"
                            as="select"
                            value={roomType}
                            onChange={(e) => setChange(e, setRoomType)}
                            required
                        >
                            <option></option>
                            <option value="standard">STANDARD || Bed: DOUBLE - Guests: 4 || Price: €120</option>
                            <option value="deluxe">DELUXE || Bed: QUEEN - Guests: 2 || Price: €150</option>
                            <option value="suite">SUITE || Bed: KING - Guests: 4 || Price: €200</option>
                        </Form.Select>
                    </Form.Group>
                    <FormInput
                        label={"Guests"}
                        type={"number"}
                        value={guests}
                        onChange={(e) => setChange(e, setGuests)}
                        required
                    />
                    <Row className="d-flex justify-content-center">
                        <TransparentButton 
                        type="submit" 
                        style={{
                            "margin":"1rem",
                            "backgroundColor": "#455d58"
                            }}
                        >
                            Book
                        </TransparentButton>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

export default EditBooking;
