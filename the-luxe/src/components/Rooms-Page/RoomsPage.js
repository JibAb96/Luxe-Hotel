import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RoomCard from "../Cards/RoomCard";
import DoubleRoom from "../../images/double-room.jpg";
import DeluxeRoom from "../../images/deluxe-room.jpg";
import Suite from "../../images/hotel-suite.jpg";
import "./RoomsPage.css";

const roomsData = [
  {
    id: 1,
    title: "Standard",
    description:
      "Relax in our well-appointed standard room, featuring a king-sized bed, sleek en-suite bathroom, and all the essential amenities for a comfortable stay.",
    picture: DoubleRoom,
    subtitle: "Double Bed, 2 Guests €120.00",
    route: "/rooms/standard",
  },
  {
    id: 2,
    title: "Deluxe",
    description:
      "Upgrade to our deluxe room, offering a queen-sized bed, modern en-suite bathroom, and additional features like a cozy seating area with plush armchairs and a coffee table.",
    picture: DeluxeRoom,
    subtitle: "Queen Bed, 2 Guests €150.00",
    route: "/rooms/deluxe",
  },
  {
    id: 3,
    title: "Suite",
    description:
      "Indulge in our luxurious suite, complete with a separate living area, king-sized bed, spacious en-suite bathroom, and premium amenities for an exceptional experience.",
    picture: Suite,
    subtitle: "King Bed, 4 Guests €200.00",
    route: "/rooms/suite",
  },
];

const RoomsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="pad" fluid>
      <h1 className="title">Rooms</h1>
      <Row className="card-container">
        {roomsData.map((room) => {
          return (
            <RoomCard
              key={room.id}
              title={room.title}
              text={room.description}
              picture={room.picture}
              subtitle={room.subtitle}
              route={room.route}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default RoomsPage;
