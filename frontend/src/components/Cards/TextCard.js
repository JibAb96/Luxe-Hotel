import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "./TextCard.module.css";
const TextCard = ({ Title, Text, Element, titleClass, lg = 4, className, ...rest }) => {
  return (
    <Col xs={12} sm={6} lg={lg} className="d-flex justify-content-center">
      <Card className={`${styles.card} shadow p-1 rounded ${ className || ""}`} {...rest}>
        <Card.Body className={styles.body}>
          <Card.Title className={titleClass}>{Title}</Card.Title>
          <Card.Text as="div">{Text}</Card.Text>
          <div className={styles.elements}>{Element}</div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default TextCard;
