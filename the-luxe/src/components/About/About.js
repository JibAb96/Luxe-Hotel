import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap"
import Reception from "../../images/hotel-reception-2.webp"
import "./About.css"

const About = () => {
    return(
        <Container  fluid>
            <h1 className="about-us">About us</h1>
            <Row className="about">
                <Col>
                    <p className="about-us-p">
                        Located in Luxembourg, our luxury hotel offers 
                        an exquisite escape for discerning travelers. With elegantly 
                        designed rooms, world-class amenities, and personalized service, 
                        we cater to guests seeking the ultimate in comfort and sophistication. 
                        Whether visiting for leisure or business, our hotel combines modern luxury with 
                        the charm of Luxembourg’s rich heritage, creating an unforgettable experience.
                    </p>
                </Col>
                <Col>
                    <Image className="about-img" src={Reception}/>
                </Col>
            </Row>
        </Container>
    )
}

export default About