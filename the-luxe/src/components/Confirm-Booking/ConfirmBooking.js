import React, { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { ProfileContext } from "../../contexts/ProfileContext"
const ConfirmBooking = () => {
    
    const { id } = useParams();

    const [haveData, setHaveData] = useState(false);
    const [booking, setBooking] = useState(null);

    const { profileData } = useContext(ProfileContext);

    useEffect(() => {
        const fetchBooking = async () => {
            try{
                const response = await fetch(`http://localhost:3000/confirm-booking/${id}`)
                if (!response.ok){
                    setHaveData(false);
                    return;
                }

                const data = response.json();
                setBooking(data)
            }
            catch(error){
                console.error(error)
                setHaveData(false)
            }
        }
        fetchBooking();
    }, [])

    return(
        <Container>
            <h1>Booking Successful</h1>
            <p>Thanks for booking with us {profileData.first_name}!</p>
            <p>Your booking reference is {booking.id}.</p>
            <p>You booked a {booking.room_type} from {booking.check_in} to {booking.check_out} for {booking.guests} guests.</p>
            <p>Total price: {booking.price}</p>
            <h1>We look forward to welcoming you to our hotel</h1>
            <p className="bold">Check in time is at 15:00 (3PM)</p>
            <p>If you have any quesion or need any support please contact us!</p>
            <p>We hope you'll enjoy your stay!</p>
            <p>You can view your booking <a href={`http://localhost:3001/reservations/{id}`}>here</a>.</p>
        </Container>
        )
}

export default ConfirmBooking