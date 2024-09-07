import React from "react";
import { Container, Row} from "react-bootstrap";
import RoomCard from "../Cards/RoomCard";
import DoubleRoom from "../../images/double-room.jpg"
import DeluxeRoom from "../../images/deluxe-room.jpg"
import Suite from "../../images/hotel-suite.jpg"
import "./RoomsPage.css"

const RoomsPage = () => {

    return(
        <Container style={{padding:"5rem"}} fluid>
            <h1 className="title">Rooms</h1>
            <Row>
                <RoomCard 
                    text={"Relax in our well-appointed standard room, featuring a king-sized bed, sleek en-suite bathroom, and all the essential amenities for a comfortable stay."}
                    picture={DoubleRoom} 
                    title={"Standard"}
                    subtitle={"Double Bed, 2 Guests €120.00"} 
                />
                <RoomCard
                    text={"Upgrade to our deluxe room, offering a king-sized bed, modern en-suite bathroom, and additional features like a cozy seating area with plush armchairs and a coffee table."}
                    picture={DeluxeRoom}
                    title={"Deluxe"}
                    subtitle={"Queen Bed, 2 Guests €150.00"} 
                />
                <RoomCard
                    text={"Indulge in our luxurious suite, complete with a separate living area, king-sized bed, spacious en-suite bathroom, and premium amenities for an exceptional experience."}
                    picture={Suite}
                    title={"Suite"}
                    subtitle={"King Bed, 4 Guests €200.00"}
                />
            </Row>
        </Container>
    )
}

export default RoomsPage