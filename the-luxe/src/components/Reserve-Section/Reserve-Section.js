import React from "react";
import { Container, Row } from "react-bootstrap";
import ReserveCard from "../Cards/Reserve-Card";
import "./Reserve-Section.css"

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
        </Container>
    )
}

export default ReserveSection