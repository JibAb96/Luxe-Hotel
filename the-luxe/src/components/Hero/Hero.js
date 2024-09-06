import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css"
import GreenButton from "../Buttons/GreenButton";
const Hero = () => {
    return (
    <div className="hero">
        <Container fluid>
            <div class="hero__text-box">
                <h1 class="hero__text">
                    <span class="hero__text-top">Luxury</span>
                    <span class="hero__text-bottom">Comfort</span>
                </h1>
                <GreenButton>Book a Room</GreenButton>
            </div>
        </Container>
    </div>
    )
}

export default Hero