import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Reserve-Card.css"
const ReserveCard = ({Title, Text}) => {
    return(
        <Col  xs={12} sm={6} lg={4} className="p-1">
            <Card className="card-container">
                <Card.Body className="r-card-body">
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ReserveCard