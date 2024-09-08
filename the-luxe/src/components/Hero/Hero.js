import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css"
import TransparentButton from "../Buttons/TransparentButton";
const Hero = () => {
    return (
        
            <Container className="hero" fluid>
                <Row className="hero__text-box">
                    <h1 className="hero__text">
                        <span>Luxury</span>
                        <span>Comfort</span>
                    </h1>
                    <TransparentButton style={{marginLeft: "1rem"}}>Book a Room</TransparentButton>
                </Row>
            </Container>
        
    )
}

export default Hero