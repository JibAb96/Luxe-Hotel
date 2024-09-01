import React from "react";
import "./Hero.css"
const Hero = () => {
    return (
    <div id="hero" class="hero">
        <div class="container">
            <div class="hero__text-box">
                <h1 class="hero__text">
                    <span class="hero__text-top">Luxury</span>
                    <span class="hero__text-bottom">Comfort</span>
                </h1>
                <button class="btn btn-green">Book a Room</button>
            </div>
        </div>
    </div>
    )
}

export default Hero