import React, { useContext, useEffect, useState } from 'react';
import { Form, Card, Row } from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./EditBooking.css"
import FormInput from '../Form/Input';
import { AlertContext } from '../../contexts/Alert';

const EditBooking = ({booking, handleExit}) => {
    
    const [checkIn , setCheckIn] = useState("");
    const [checkOut , setCheckOut] = useState("");
    const [roomType , setRoomType] = useState("");
    const [guests , setGuests] = useState("");
    
    const { showAlertWithTimeout } = useContext(AlertContext);

    useEffect(() => { window.scrollTo(0, 0)  }, [])
    useEffect(() => {
        setCheckIn(booking.check_in.substring(0,10));
        setCheckOut(booking.check_out.substring(0,10));
        setRoomType(booking.room_type);
        setGuests(booking.guests)
    }, [booking])
    
    const setChange = (e, setState) => {
        setState(e.target.value )
    }

    const prices = {standard: 120, deluxe: 150, suite: 200};
    
    const calculateDaysBetween = (checkIn, checkOut) => 
        (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

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
                            checkIn: [checkIn.substring(0,10)], 
                            checkOut: [checkOut.substring(0,10)], 
                            roomType, 
                            guests, 
                            price
                        };
        try {
            const response = await fetch(`http://localhost:3000/edit-booking/${booking.id}`, {
                method: "PUT",
                headers:{
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(formData)
            });
            if(!response.ok){
                handleExit();
                return showAlertWithTimeout("There was an error making your booking.", "alert-danger")  
            }
            handleExit();
            showAlertWithTimeout("Your booking was successful!", "alert-success")     
        }
        catch (error){
            handleExit();
            console.error(error.message)
            showAlertWithTimeout("There was an error making your booking", "alert-danger")
        }
    }
    return (
        <div>
            <Card className="edit-booking">
                <Form className="shadow p-4 rounded edit-booking-form" onSubmit={handleSubmit} >
                    <h1 className="h4 mb-2 text-center">Edit Your Booking</h1>
                    <FormInput 
                        label={"Check-in"} 
                        type={"date"}
                        value={checkIn}
                        onChange={(e) => setChange(e, setCheckIn)}  
                        required
                    />
                   <FormInput 
                        label={"Check-out"} 
                        type={"date"}
                        value={checkOut} 
                        onChange={(e) => setChange(e, setCheckOut)}  
                        required
                    />
                    <Form.Group className="mb-2" controlId="Room-Type">
                        <Form.Label>Room Category</Form.Label>
                        <Form.Select 
                            aria-label="Room-Type" 
                            as="select"
                            value={roomType} 
                            onChange={(e) => setChange(e,setRoomType)}
                            required
                        >
                            <option></option>
                            <option value="standard">STANDARD || Bed: DOUBLE - Guests: 4 || Price: €120</option>
                            <option value="deluxe">DELUXE || Bed: QUEEN - Guests: 2 || Price: €150</option>
                            <option value="suite">SUITE ||Bed: KING - Guests: 4 || Price: €200</option>
                        </Form.Select>
                    </Form.Group>
                    <FormInput 
                        label={"Guests"} 
                        type={"number"}
                        value={guests}
                        onChange={(e) => setChange(e, setGuests)}  
                        required    />
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