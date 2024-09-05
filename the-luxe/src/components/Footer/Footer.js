import React from "react";
import "./Footer.css";
import { Container, Col, Row} from "react-bootstrap";

const Footer = () => {
    return(
        <Container fluid>
            <Row style={{backgroundColor: "#455d58", color: "aliceblue"}}>
                <Col xs={12} md={4} >
                    <h3 className="footer-h">About</h3>
                </Col>
                <Col xs={12} md={4} >
                    <h3 className="footer-h">Payment</h3> 
                </Col>
                <Col xs={12} md={4} >
                    <h3 className="footer-h">Social Networks</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer