import React from "react";
import "./Reviews.css"
import { Carousel, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft, faStar} from "@fortawesome/free-solid-svg-icons"
import UserOne from "../../images/user-pic-one.avif"
import UserTwo from "../../images/user-pic-two.avif"
import UserThree from "../../images/user-pic-three.avif"

const Reviews = () => {
    const icons = Array(5).fill(<FontAwesomeIcon icon={faStar} />)

    const renderStarIcons = () => (
        <div>
          {icons.map((icon, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="star"
            />
          ))}
        </div>
      );
      
    return (
        <div className="reviews">
            <Container   fluid>
                <h2 className="text-center sec-title">CUSTOMERS REVIEWS</h2>
                <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
                <Carousel data-bs-theme="dark" indicators={false}>
                    <Carousel.Item className="cons">
                        <p class="p">
                            Beautifully furnished rooms, top-tier amenities, and an outstanding restaurant. 
                            The staff made our stay memorable with their warmth and professionalism.
                        </p>
                        <div> {renderStarIcons()} </div>
                        <img src={UserOne} alt="user" className="user"/>
                        <h3 className="name">Allison Dubravka</h3>
                    </Carousel.Item>
                    <Carousel.Item className="cons">
                        <p class="p">
                            From the moment we arrived, we were treated like royalty. 
                            The rooms were elegantly designed, and the view was breathtaking. 
                        </p>
                        <div> {renderStarIcons()} </div>
                        <img src={UserTwo} alt="user" className="user"/>
                        <h3 className="name">Muhammad Arifagic</h3>
                    </Carousel.Item>
                    <Carousel.Item className="cons">
                        <p class="p">
                            The attention to detail at this hotel is unmatched. The spa, dining, 
                            and service were impeccable. Every corner of the hotel exudes elegance.
                        </p>
                        <div> {renderStarIcons()} </div>
                        <img src={UserThree} alt="user" className="user"/>
                        <h3 className="name">Jake Humphrey</h3>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Reviews