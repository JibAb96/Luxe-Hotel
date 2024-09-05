import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Hero.css"
const Hero = () => {
    return (
    <div className="hero">
        <Container fluid>
            <div class="hero__text-box">
                <h1 class="hero__text">
                    <span class="hero__text-top">Luxury</span>
                    <span class="hero__text-bottom">Comfort</span>
                </h1>
                <Button class="btn btn-green">Book a Room</Button>
            </div>
        </Container>
    </div>
    )
}

export default Hero