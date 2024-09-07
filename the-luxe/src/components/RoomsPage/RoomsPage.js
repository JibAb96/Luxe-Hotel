import React from "react";
import { Container, Row} from "react-bootstrap";
import RoomCard from "../Cards/RoomCard";
import DoubleRoom from "../../images/double-room.jpg"
import DeluxeRoom from "../../images/deluxe-room.jpg"
import Suite from "../../images/hotel-suite.jpg"
import "./RoomsPage.css"

const RoomsPage = () => {

    return(
        <Container fluid>
            <Row>
                <RoomCard 
                    text={"This here is a double room"} 
                    picture={DoubleRoom} 
                    title={"Double Room"} 
                />
                <RoomCard
                    text={"This here is a deluxe room"}
                    picture={DeluxeRoom}
                    title={"Deluxe Room"} 
                />
                <RoomCard
                    text={"This here is suite"}
                    picture={Suite}
                    title={"Suite"} 
                />
            </Row>
        </Container>
    )
}

export default RoomsPage