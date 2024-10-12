import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

const ConfirmBooking = () => {
    const { id } = useParams();

    return(
        <Container>
            <h1>Booking Successful</h1>
            <p>Thanks for booking with us {name}!</p>
            <p>Your booking reference is {Booking.id}.</p>
            <p>You booked a {room-type} from {check-in} to {check-out} for {guests} 2.</p>
            <p>Total price: {price}</p>
            <h1>We look forward to welcoming you to our hotel</h1>
            <p className="bold">Check in time is at 15:00 (3PM)</p>
            <p>If you have any quesion or need any support please contact us!</p>
            <p>We hope you'll enjoy your stay!</p>
            <p>You can view your booking <a href={`http://localhost:3001/reservations/{id}`}>here</a>.</p>
        </Container>
        )
}

export default ConfirmBooking