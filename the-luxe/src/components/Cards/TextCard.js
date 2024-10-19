import React from "react";
import { Card, Col } from "react-bootstrap";
import "./TextCard.css";
const TextCard = ({ Title, Text, Element, titleClass, lg = 4, className, ...rest }) => {
  return (
    <Col xs={12} sm={6} lg={lg} className="d-flex justify-content-center">
      <Card className={`text-card shadow p-1 rounded ${ className || ""}`} {...rest}>
        <Card.Body className="structure-card-body ">
          <Card.Title className={titleClass}>{Title}</Card.Title>
          <Card.Text>{Text}</Card.Text>
          <div className="elements-container">{Element}</div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TextCard;
