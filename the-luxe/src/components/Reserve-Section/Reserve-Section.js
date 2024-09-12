import React from "react";
import { Container, Row } from "react-bootstrap";
import ReserveCard from "../Cards/Reserve-Card";
import "./Reserve-Section.css"
import TransparentButton from "../Buttons/TransparentButton";

const ReserveSection = () => {
    return(
        <Container className="reservations" fluid>
            <h1 className="reservation-title">Manage Your Booking</h1>
            <Row className="cards">
                <ReserveCard 
                    Title={"1. Review Details"}
                    Text={"View details of your reservation."}
                />
                <ReserveCard 
                    Title={"2. Modify Reservations"}
                    Text={"Make changes to your reservation."}
                />
                
                <ReserveCard 
                    Title={"3. Cancel Reservations"}
                    Text={"Cancel your existing booking up to 24h before check in."}
                />
            </Row>
            <Row>
                <TransparentButton
                style={{
                    "backgroundColor": "#455d58",
                    "margin": "5rem auto 0"
                }}
                >Your Reservations</TransparentButton>
            </Row>
        </Container>
    )
}

export default ReserveSection