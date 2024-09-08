import React from "react";
import { Card } from "react-bootstrap";

const DiningCard = ({Title, Text}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                    {Text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DiningCard