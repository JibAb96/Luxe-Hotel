import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReserveCard from '../Cards/TextCard';
import './Profile.css';
import TransparentButton from '../Buttons/TransparentButton';
const Profile = () => {
    const user = {
        name: 'John Doe',
        dob: '1990-01-01',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        joined: '2021-01-01',
        country: 'United States',
        city: 'New York',
        address: '1234 Elm Street',
        postalcode: '12345',
    };

    return (
        <Container fluid>
            <h1 className='profile-title'>Profile</h1>
            <Row className='d-flex justify-content-center gap-5' >
                <ReserveCard
                    style={{ width: '100%', minHeight: '23rem', }}
                    Title={user.name.split(' ')[0]}
                    Text={
                            `Full Name: ${user.name} 
                            \nDate of Birth: ${user.dob} 
                            \nJoined: ${user.joined}`}
                    Element={
                                <div>
                                    <TransparentButton style={{minWidth:"7rem", backgroundColor:"#455d58" }}>Edit</TransparentButton>
                                    <TransparentButton style={{minWidth:"7rem", backgroundColor:"#455d58" }}>Delete</TransparentButton>
                                </div>
                            }      
                />
                <ReserveCard
                    style={{ width: '100%', minHeight: '23rem' }}
                    Title="More Info"
                    Text={
                            `Email: ${user.email} 
                            \nPhone: ${user.phone} 
                            \nCountry: ${user.country} 
                            \nCity: ${user.city} 
                            \nAddress: ${user.address} 
                            \nPostal Code: ${user.postalcode}`
                        }
                />
            </Row>
        </Container>
    );
};

export default Profile;