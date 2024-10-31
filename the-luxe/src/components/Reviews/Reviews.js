import React from "react";
import "./Reviews.css";
import { Carousel, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import UserOne from "../../images/user-pic-one-TPNG.webp";
import UserTwo from "../../images/user-pic-two-TPNG.webp";
import UserThree from "../../images/user-pic-three-TPNG.webp";
import UserOneBackUp from "../../images/user-pic-one-TPNG.jpg";
import UserTwoBackUp from "../../images/user-pic-two-TPNG.jpg";
import UserThreeBackUp from "../../images/user-pic-three-TPNG.jpg";

const Reviews = () => {
  const icons = Array(5).fill(<FontAwesomeIcon icon={faStar} />);

  const renderStarIcons = () => (
    <div>
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="star" />
      ))}
    </div>
  );

  const reviews = [
    {
      id: 1,
      name: "Allison Dubravka",
      review: "Beautifully furnished rooms, top-tier amenities, and an outstanding restaurant. The staff made our stay memorable with their warmth and professionalism.",
      image: UserOne,
      backupImage: UserOneBackUp
    },
    {
      id: 2,
      name: "Muhammad Arifagic",
      review: "From the moment we arrived, we were treated like royalty. The rooms were elegantly designed, and the view was breathtaking.",
      image: UserTwo,
      backupImage: UserTwoBackUp
    },
    {
      id: 3,
      name: "Jake Humpfrey",
      review: "The attention to detail at this hotel is unmatched. The spa, dining, and service were impeccable. Every corner of the hotel exudes elegance.",
      image: UserThree,
      backupImage: UserThreeBackUp
    }
  ]

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc; 
  };  

  return (
    <div className="reviews">
      <Container fluid>
        <h2 className="text-center sec-title">CUSTOMERS REVIEWS</h2>
        <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
        <Carousel data-bs-theme="dark" indicators={false}>
          {reviews.map((review) => 
              <Carousel.Item key={review.id} className="cons">
                <p className="p">{review.review}</p>
                <div>{renderStarIcons()}</div>
                <img 
                  src={review.image} 
                  onError={(e) => handleImageError(e, review.backupImage)} 
                  alt="user" 
                  className="user" 
                />
                <h3 className="name">{review.name}</h3>
              </Carousel.Item>
            )
          }
        </Carousel>
      </Container>
    </div>
  );
};

export default Reviews;
