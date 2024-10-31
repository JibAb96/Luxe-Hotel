import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import StandardRoom from "../../images/double-room-TPNG.webp";
import DeluxeRoom from "../../images/deluxe-room-TPNG.webp";
import Suite from "../../images/hotel-suite-TPNG.webp";
import StandardRoomFB from "../../images/double-room-TPNG.jpg";
import DeluxeRoomFB from "../../images/deluxe-room-TPNG.jpg";
import SuiteFB from "../../images/hotel-suite-TPNG.jpg";
import GreenButton from "../Buttons/GreenButton";
import "./ViewRooms.css";
import { ProfileContext } from "../../contexts/ProfileContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const roomDetails = {
  standard: {
    title: "Standard",
    price: "€120.00",
    description:
      "Relax in our well-appointed standard room, featuring a king-sized bed, sleek en-suite bathroom, and all the essential amenities for a comfortable stay.",
    amenities: [
      "King-sized bed",
      "En-suite bathroom",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Complimentary toiletries",
    ],
    image: StandardRoom,
    fallbacksrc: StandardRoomFB
  },
  deluxe: {
    title: "Deluxe",
    price: "€150.00",
    description:
      "Upgrade to our deluxe room, offering a king-sized bed, modern en-suite bathroom, and additional features like a cozy seating area with plush armchairs and a coffee table.",
    amenities: [
      "King-sized bed",
      "Modern en-suite bathroom",
      "Seating area with armchairs",
      "Coffee table",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Complimentary toiletries",
    ],
    image: DeluxeRoom,
    fallbacksrc: DeluxeRoomFB
  },
  suite: {
    title: "Suite",
    price: "€200.00",
    description:
      "Indulge in our luxurious suite, complete with a separate living area, king-sized bed, spacious en-suite bathroom, and premium amenities for an exceptional experience.",
    amenities: [
      "King-sized bed",
      "Separate living area",
      "Spacious en-suite bathroom",
      "Premium amenities",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Complimentary toiletries",
    ],
    image: Suite,
    fallbacksrc: SuiteFB
  },
};

const ViewRooms = () => {
  const { roomType } = useParams();

  const { isSignedIn, profileData } = useContext(ProfileContext);

  const room = roomDetails[roomType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
  if (!room) {
    return (
      <Container 
        className="error-handling" 
         fluid>
        <h1 className="room-type">Room Not Found</h1>
        <p>
          The room you are looking for does not exist. Please check the URL or
          choose from our available rooms:
        </p>
        <ul>
          {Object.keys(roomDetails).map(type => (
            <li key={type}>
              <Link to={`/rooms/${type}`}>{roomDetails[type].title}</Link>
            </li>
          ))}
        </ul>
        <Link to="/rooms">
          <GreenButton style={{backgroundColor: "#455d58"}}>View Rooms</GreenButton>
        </Link>
      </Container>
      )
  }

  return (
    <Container className="pad" fluid>
      <Row className="outer">
        <Col md={6}>
          <a href="/rooms">
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: "1.5rem", margin: "1rem", color: "#455d58" }}
            />
          </a>
          <Card>
            <Card.Img 
              variant="top" 
              src={room.image} 
              alt="Picture of room"
              onError={room.fallbacksrc} />
          </Card>
        </Col>
        <Col md={6} className="text-color">
          <h1 className="room-type">{room.title}</h1>
          <h2>Price: {room.price}</h2>
          <p className="pg">{room.description}</p>
          <h3>Breakfast Included</h3>
          <p className="pg">
            Start your day with an exquisite breakfast experience at our luxury
            hotel in Luxembourg. Indulge in a gourmet selection of freshly baked
            pastries, seasonal fruits, artisanal cheeses, and delicacies sourced
            from local farms.
          </p>
          <h3>Amenities:</h3>
          <ul className="pg">
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          {isSignedIn ? (
            <GreenButton
              as={Link}
              to={`/book/${profileData.id}`}
            >
              Book Now
            </GreenButton>
          ) : (
            <GreenButton
              as={Link}
              to={"/signin"}
            >
              Book Now
            </GreenButton>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewRooms;
