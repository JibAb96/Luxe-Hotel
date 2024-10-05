import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reservations.css"
import TransparentButton from "../Buttons/TransparentButton";
import { ProfileContext } from "../../contexts/ProfileContext";

const Reservations = () => {

    const [bookings, setBookings] = useState([]);

    const { profileData } = useContext(ProfileContext)
    useEffect(()  => {
        if( !profileData.id ){ return }
        const fetchBookings = async () =>  {
        try {
            const response = await fetch(`http://localhost:3000/reservations/${profileData.id}`)
            if(!response.ok){
                throw new Error("Failed to fetch bookings")
            }
            const data = await response.json();
            setBookings(data);
        }
        catch(error){
            console.error(error)
        }}
        fetchBookings();
    }, [profileData.id, bookings])
    

    return (
        <Container style={{padding: "1rem"}} fluid>
            {console.log("Bookings:", bookings)}
            <Row className="d-flex justify-content-center">
                <h1 className="page-heading">Your Reservations</h1>
             </Row>
             <Row className="d-flex justify-content-center" style={{padding: "2rem 0 7rem"}}>   
                {bookings.map((booking, index) => (
                    <TextCard 
                        key={index}
                        titleClass={"heading"}
                        Title={booking.room_type}
                        Text={
                            <>
                                <p><span className="bold">Booking Id:</span> {booking.id}</p>
                                <p><span className="bold">Check-In</span>: {booking.check_in.substring(0,10)}</p>
                                <p><span className="bold">Check-Out:</span> {booking.check_out.substring(0,10)}</p>
                                <p><span className="bold">Guests:</span> {booking.guests}</p>
                                <p><span className="bold">Total-price:</span> €{booking.price}</p>
                            </>
                            }
                            Element={
                                <div>
                                    <TransparentButton style={{minWidth:"7rem", backgroundColor:"#455d58" }}>Edit</TransparentButton>
                                    <TransparentButton style={{minWidth:"7rem", backgroundColor:"#455d58" }}>Cancel</TransparentButton>
                                </div>
                            
                            }   
                            style={{margin: ".5rem"}}
                        />
                    
                ))}
            </Row>
        </Container>
    );
};

export default Reservations;