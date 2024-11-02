import React from "react";
import styles from "./Footer.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faPaypal,
  faApplePay,
  faCcVisa,
  faInstagram,
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container className={`${styles.container}`} fluid>
      <Row className={styles.space}>
        <Col xs={12} md={4}>
          <h3 className={`${styles.title} ${styles.left}`}>Contact us</h3>
          <p className={`${styles.text} ${styles.left}`}>
            Email: officialluxehotel@gmail.com<br />
            Phone: +35272345092<br />
            Address: 12 Rue Jean Engling, 1466 Dommeldange Luxembourg
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h3 className={`${styles.title}`}>Payment Methods</h3>
          <p className={`${styles.text}`}>
            Pay any way you choose, we support all payment options
          </p>
          <ul className={`${styles.payment}`}>
            <li>
              <FontAwesomeIcon icon={faPaypal} className={`${styles.icons}`} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCcVisa} className={`${styles.icons}`} />
            </li>
            <li>
              <FontAwesomeIcon icon={faApplePay} className={`${styles.icons}`} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCcMastercard} className={`${styles.icons}`} />
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h3 className={`${styles.title}`}>Social Networks</h3>
          <p className={`${styles.text}`}>
            Follow us on social media and keep in touch with Luxe Hotel.
          </p>
          <ul className={`${styles.payment}`}>
            <li>
              <a 
                rel="noreferrer" 
                target="_blank" 
                className={`${styles.anchor}`} 
                href="http://www.facebook.com"
                aria-label="Follow us on Facebook">
                <FontAwesomeIcon icon={faFacebook} className={`${styles.icons}`} />
              </a>     
            </li>
            <li>
              <a 
                rel="noreferrer" 
                target="_blank" 
                className={`${styles.anchor}`} 
                href="http://www.twitter.com"
                aria-label="Follow us on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className={`${styles.icons}`} />
              </a>
            </li>
            <li>
              <a 
                rel="noreferrer" 
                target="_blank" 
                className={`${styles.anchor}`} 
                href="http://www.linkedin.com"
                aria-label="Follow us on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className={`${styles.icons}`} />
              </a>
            </li>
            <li>
              <a 
                rel="noreferrer" 
                target="_blank" 
                className={`${styles.anchor}`} 
                href="http://www.instagram.com"
                aria-label="Follow us on Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className={`${styles.icons}`} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
