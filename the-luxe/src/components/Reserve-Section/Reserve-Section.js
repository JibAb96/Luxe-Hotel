import React from "react";
import { Container, Row } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Reserve-Section.css"
import TransparentButton from "../Buttons/TransparentButton";

const ReserveSection = () => {
    return(
        <Container className="reservations" fluid>
            <h1 className="reservation-title">Manage Your Booking</h1>
            <Row className="d-flex justify-content-center p-5 test">
                <TextCard 
                    style={{maxWidth: "18rem", minHeight: "8rem"}}
                    Title={"1. Review Details"}
                    Text={"View details of your reservation."}
                />
                <TextCard
                    style={{maxWidth: "18rem", minHeight: "8rem"}}
                    Title={"2. Modify Reservations"}
                    Text={"Make changes to your reservation."}
                />
                
                <TextCard
                    style={{maxWidth: "18rem", minHeight: "8rem"}}
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