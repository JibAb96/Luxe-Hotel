import React from "react";
import Dining from "../../images/hotel-dining.jpg"
import { Container, Row, Col, Image } from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton";
import "./Dining-Section.css"

const DiningSection = () => {
    return(
        <Container className="dining" fluid>
            <Row className="align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Image src={Dining} className="dining-img" rounded/>
                </Col>
                <Col className="dining-text-box" xs={12} md={6}>
                    <h2 className="dining-headline">Dining</h2>
                    <p className="dining-text">
                        Experience the ultimate in comfort and elegance in our luxury hotel rooms.
                        Each room is designed with sophisticated décor, high-end furnishings, and
                        modern amenities, providing a serene escape from the ordinary.
                    </p>
                    <TransparentButton>Explore Now</TransparentButton>
                </Col>
            </Row>
        </Container>
    )
}

export default DiningSection