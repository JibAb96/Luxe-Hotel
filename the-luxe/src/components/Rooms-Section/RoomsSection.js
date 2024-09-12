import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import Room from "../../images/hotel-room.jpg"
import TransparentButton from "../Buttons/TransparentButton";
import "./RoomsSection.css"
import { Link } from "react-router-dom";
const RoomsSection = () => {
    return (
            <Container className="rooms" fluid>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <Image src={Room} className="hotel-room" rounded/>
                    </Col>
                    <Col className="text-box" xs={12} md={6}>
                        <h2 className="headline">ROOMS</h2>
                        <p className="text">
                            Experience the ultimate in comfort and elegance in our luxury hotel rooms.
                            Each room is designed with sophisticated décor, high-end furnishings, and
                            modern amenities, providing a serene escape from the ordinary.
                        </p>
                        <TransparentButton as={Link} to={"/rooms"}>Explore Now</TransparentButton>
                    </Col>
                </Row>
            </Container>
    )
}

export default RoomsSection