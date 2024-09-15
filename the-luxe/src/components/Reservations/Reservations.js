import React from "react";
import { Container, Row } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reservations.css"
import TransparentButton from "../Buttons/TransparentButton";

const Reservations = ({ reservations }) => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center">
                <h1 className="page-heading">Your Reservations</h1>
                {reservations.map((reservation, index) => (
                    <TextCard 
                        key={index}
                        Title={<span className="heading">{reservation.room}</span>}
                        Text={
                            <>
                                <p><span className="bold">Booking Id:</span> {reservation.id}</p>
                                <p><span className="bold">Check-In</span>: {reservation.checkin}</p>
                                <p><span className="bold">Check-Out:</span> {reservation.checkout}</p>
                                <p><span className="bold">Guests:</span> {reservation.guests}</p>
                                <p><span className="bold">Total-price:</span> €{reservation.price}</p>
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