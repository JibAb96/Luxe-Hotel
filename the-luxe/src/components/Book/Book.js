import React, { useContext, useEffect, useState } from 'react';
import { Form, Card, Row, Alert} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./Book.css"
import FormInput from '../Form/Input';
import { ProfileContext } from '../../contexts/ProfileContext';
import { AlertContext } from '../../contexts/Alert';

const Book = () => {
    
    const [checkIn , setCheckIn] = useState("");
    const [checkOut , setCheckOut] = useState("");
    const [roomType , setRoomType] = useState("");
    const [guests , setGuests] = useState("");
    
    const { profileData } = useContext(ProfileContext);
    const { showAlertWithTimeout, showAlert, alertMessage, alertStyle } = useContext(AlertContext);

    const setChange = (e, setState) => {
        setState(e.target.value )
    }
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const prices = {standard: 120, deluxe: 150, suite: 200};
    
    const calculateDaysBetween = (checkIn, checkOut) => 
        (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24);

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
                            checkIn: [utcCheckIn], 
                            checkOut: [utcCheckOut], 
                            roomType, 
                            guests, 
                            price
                        };
        console.log(formData)
        try {
            const response = await fetch(`http://localhost:3000/book/${profileData.id}`, {
                method: "POST",
                headers:{
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if(data){
                showAlertWithTimeout("Your booking was successful!", "alert-success")               
            } else{
                showAlertWithTimeout("There was an error making your booking.", "alert-danger")               
            }
        }
        catch (error){
            console.error(error.message)
            showAlertWithTimeout("There was an error making your booking")
        }
    }
    return (
        <div>
            {showAlert &&  <Alert className={`alert ${alertStyle}`} role="alert">{alertMessage}</Alert>}
            <Card className="booking">
                <Form className="shadow p-4 rounded booking-form" onSubmit={handleSubmit} >
                    <h1 className="h4 mb-2 text-center">Book Your Stay</h1>
                    
                    <FormInput 
                        label={"Check-in"} 
                        type={"date"}
                        onChange={(e) => setChange(e, setCheckIn)}  
                        required
                    />
                   <FormInput 
                        label={"Check-out"} 
                        type={"date"} 
                        onChange={(e) => setChange(e, setCheckOut)}  
                        required
                    />
                    <Form.Group className="mb-2" controlId="Room-Type">
                        <Form.Label>Room Category</Form.Label>
                        <Form.Select 
                            aria-label="Room-Type" 
                            as="select" 
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
                        onChange={(e) => setChange(e, setGuests)}  
                        required    />
                    <Row className="d-flex justify-content-center">
                        <TransparentButton type="submit" style={{
                            "margin":"1rem",
                            "backgroundColor": "#455d58"
                            }}>
                            Book
                        </TransparentButton>
                    </Row>
                </Form>
            </Card>
        </div>
  );
};



export default Book;