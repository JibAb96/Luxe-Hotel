import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RoomCard from "../Cards/RoomCard";
import DoubleRoom from "../../images/double-room-TPNG.webp";
import DeluxeRoom from "../../images/deluxe-room-TPNG.webp";
import Suite from "../../images/hotel-suite-TPNG.webp";
import DoubleRoomFB from "../../images/double-room-TPNG.jpg";
import DeluxeRoomFB from "../../images/deluxe-room-TPNG.jpg";
import SuiteFB from "../../images/hotel-suite-TPNG.jpg";
import styles from "./RoomsPage.module.css";

const roomsData = [
  {
    id: 1,
    title: "Standard",
    description:
      "Relax in our well-appointed standard room, featuring a king-sized bed, sleek en-suite bathroom, and all the essential amenities for a comfortable stay.",
    picture: DoubleRoom,
    fallbacksrc: DoubleRoomFB,
    subtitle: "Double Bed, 2 Guests €120.00",
    route: "/rooms/standard",
  },
  {
    id: 2,
    title: "Deluxe",
    description:
      "Upgrade to our deluxe room, offering a queen-sized bed, modern en-suite bathroom, and additional features like a cozy seating area with plush armchairs and a coffee table.",
    picture: DeluxeRoom,
    fallbacksrc: DeluxeRoomFB,
    subtitle: "Queen Bed, 2 Guests €150.00",
    route: "/rooms/deluxe",
  },
  {
    id: 3,
    title: "Suite",
    description:
      "Indulge in our luxurious suite, complete with a separate living area, king-sized bed, spacious en-suite bathroom, and premium amenities for an exceptional experience.",
    picture: Suite,
    fallbacksrc: SuiteFB,
    subtitle: "King Bed, 4 Guests €200.00",
    route: "/rooms/suite",
  },
];

const RoomsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className={styles.container} fluid>
      <h1 className={styles.title}>Rooms</h1>
      <Row>
        {roomsData.map((room) => {
          return (
            <RoomCard
              key={room.id}
              title={room.title}
              text={room.description}
              picture={room.picture}
              fallbackSrc={room.fallbacksrc}
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
