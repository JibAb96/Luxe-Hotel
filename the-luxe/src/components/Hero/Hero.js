import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css"
import TransparentButton from "../Buttons/TransparentButton";
const Hero = () => {
    return (
        <div className="hero">
            <Container fluid>
                <div class="hero__text-box">
                    <h1 class="hero__text">
                        <span class="hero__text-top">Luxury</span>
                        <span class="hero__text-bottom">Comfort</span>
                    </h1>
                    <TransparentButton>Book a Room</TransparentButton>
                </div>
            </Container>
        </div>
    )
}

export default Hero