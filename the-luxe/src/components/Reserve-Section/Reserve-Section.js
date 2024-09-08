import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DiningCard from "../Cards/Dining-Card";
import "./Reserve-Section.css"

const ReserveSection = () => {
    return(
        <Container fluid>
            <h1 className="Reservation-title">Manage Your Booking</h1>
            <Row>
                <Col>
                    <DiningCard 
                    Title={"1. Review Details"}
                    Text={"View details of your reservation."}
                    />
                </Col>
                <Col>
                    <DiningCard 
                        Title={"2. Modify Reservations"}
                        Text={"Make changes to your reservation."}
                    />
                </Col>
                <Col>
                    <DiningCard 
                        Title={"3. Cancel Reservations"}
                        Text={"Cancel your existing booking up to 24h before check in."}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default ReserveSection