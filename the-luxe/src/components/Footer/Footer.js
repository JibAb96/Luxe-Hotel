import React from "react";
import "./Footer.css";
import { Container, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCcMastercard, 
        faPaypal, 
        faApplePay,
        faCcVisa,
        faInstagram,
        faFacebook,
        faLinkedinIn,
        faTwitter} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <Container fluid>
            <Row className="footer">
                <Col xs={12} md={4} >
                    <h3 className="footer-h">Contact us</h3>
                    <p className="text">
                        Email: theluxehotel@gmail.com<br/>
                        Phone: +35272345092 <br/>
                        Address: 12 Rue Jean Engling, 1466 Dommeldange Luxembourg
                    </p>
                </Col>
                <Col xs={12} md={4} >
                    <h3 className="footer-h">Payment Methods</h3> 
                    <p className="text">Pay any way you choose, we support all payment options</p>
                    <ul className="payment-methods">
                        <li>
                            <FontAwesomeIcon icon={faPaypal} className="icons"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCcVisa} className="icons"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faApplePay} className="icons"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCcMastercard} className="icons"/>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={4} >
                    <h3 className="footer-h">Social Networks</h3>
                    <p className="text">Follow us on social media and keep in touch with Luxe Hotel.</p>
                    <ul className="payment-methods">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} className="icons"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} className="icons"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedinIn} className="icons"/>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} className="icons"/>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer