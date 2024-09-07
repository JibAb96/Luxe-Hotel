import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StandardRoom from "../../images/double-room.jpg"
import DeluxeRoom from "../../images/deluxe-room.jpg"
import Suite from "../../images/hotel-suite.jpg"

const roomDetails = {
  standard: {
    title: "Standard Room",
    price: "€120.00",
    description: "Relax in our well-appointed standard room, featuring a king-sized bed, sleek en-suite bathroom, and all the essential amenities for a comfortable stay.",
    amenities: [
      "King-sized bed",
      "En-suite bathroom",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Complimentary toiletries"
    ],
    image: StandardRoom 
  },
  deluxe: {
    title: "Deluxe Room",
    price: "€150.00",
    description: "Upgrade to our deluxe room, offering a king-sized bed, modern en-suite bathroom, and additional features like a cozy seating area with plush armchairs and a coffee table.",
    amenities: [
      "King-sized bed",
      "Modern en-suite bathroom",
      "Seating area with armchairs",
      "Coffee table",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Complimentary toiletries"
    ],
    image: DeluxeRoom 
  },
  suite: {
    title: "Suite Room",
    price: "€200.00",
    description: "Indulge in our luxurious suite, complete with a separate living area, king-sized bed, spacious en-suite bathroom, and premium amenities for an exceptional experience.",
    amenities: [
      "King-sized bed",
      "Separate living area",
      "Spacious en-suite bathroom",
      "Premium amenities",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Complimentary toiletries"
    ],
    image: Suite
  }
};

const ViewRooms = () => {
  const { roomType } = useParams();
  const room = roomDetails[roomType];
  console.log(roomType)
 
  if (!room) {
    return (
      <Container style={{ padding: "2rem" }} fluid>
        <h1>Room Not Found</h1>
        <p>The room you are looking for does not exist. Please check the URL or return to the home page.</p>
      </Container>
    );
  }

  return (
    <Container style={{ padding: "2rem" }} fluid>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={room.image} />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{room.title}</h1>
          <h2>Price: {room.price}</h2>
          <p>{room.description}</p>
          <h3>Amenities:</h3>
          <ul>
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <Button variant="primary">Book Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewRooms;
