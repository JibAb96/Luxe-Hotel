import React from "react";
import { Card, Col } from "react-bootstrap";
import "./TextCard.css"
const TextCard = ({Title, Text, Element, titleClass, ...rest}) => {
    return(
        <Col  xs={12} sm={6} lg={4}>
            <Card className="reserve shadow p-1 rounded" {...rest}>
                <Card.Body className="reserve-card-body ">
                    <Card.Title className={titleClass}>{Title}</Card.Title>
                    <Card.Text>
                        {Text}
                    </Card.Text>
                    <div className="button-container">
                        {Element}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TextCard