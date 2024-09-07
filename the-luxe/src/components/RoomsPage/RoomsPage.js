import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomCard from "../Cards/RoomCard";
import DoubleRoom from "../../images/double-room.jpg"
import "./RoomsPage.css"

const RoomsPage = () => {

    return(
        <Container fluid>
            <Row>
                <Col>
                <RoomCard text={"This here is a double room"} picture={DoubleRoom} title={"Double Room"} />
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default RoomsPage