import React from "react";
import { Container, Row } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reservations.css"
import TransparentButton from "../Buttons/TransparentButton";

const Reservations = ({ reservations }) => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center">
                <h1 className="heading">Your Reservations</h1>
                {reservations.map((reservation, index) => (
                    <TextCard 
                        key={index}
                        Title={reservation.room}
                        Text={
                            <>
                                <p>Booking Id: {reservation.id}</p>
                                <p>Check-In: {reservation.checkin}</p>
                                <p>Check-Out: {reservation.checkout}</p>
                                <p>Guests: {reservation.guests}</p>
                                <p>Total-price: {reservation.price}</p>
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