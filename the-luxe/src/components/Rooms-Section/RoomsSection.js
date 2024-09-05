import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import Room from "../../images/hotel-room.jpg"
import "./RoomsSection.css"

const RoomsSection = () => {
    return (
        <div className="rooms">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <Image src={Room} className="hotel-room"/>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="text-box">
                            <h2 className="headline">ROOMS</h2>
                            <p className="text">
                            Experience the ultimate in comfort and elegance in our luxury hotel rooms.
                            Each room is designed with sophisticated décor, high-end furnishings, and 
                            modern amenities, providing a serene escape from the ordinary.
                            </p>
                            <Button className="button button-green">Explore Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RoomsSection