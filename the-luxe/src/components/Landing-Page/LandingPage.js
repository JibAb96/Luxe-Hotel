import React from "react";
import Hero from "../Hero/Hero";
import Location from "../Location-Section/Location";
import RoomsSection from "../RoomsPage/RoomsPage";
import Reviews from "../Reviews/Reviews";

const LandingPage = () => {
    return(
        <div>
            <Hero />
            <Location />
            <RoomsSection />
            <Reviews />
        </div>
    )
}

export default LandingPage