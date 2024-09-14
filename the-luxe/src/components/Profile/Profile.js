import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TextCard from '../Cards/TextCard';
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
        <Container style={{padding: "3rem 0"}}fluid>
            <h1 className='profile-title'>Profile</h1>
            <Row className='d-flex justify-content-center gap-5' >
                <TextCard
                    style={{ width: '100%', minHeight: '32rem', }}
                    Title={user.name.split(' ')[0]}
                    Text={
                        <>
                        <p><span className='bold'>Full Name:</ span> {user.name}</p>
                        <br/>
                        <p><span className='bold'>Date of Birth:</span> {user.dob}</p>
                        <br/>
                        <p><span className='bold'>Joined:</span> {user.joined}</p>
                        </>}
                    titleClass={"titleClass"}
                    Element={
                                <div>
                                    <TransparentButton style={{minWidth:"7rem", backgroundColor:"#455d58" }}>Edit</TransparentButton>
                                    <TransparentButton style={{minWidth:"7rem", backgroundColor:"#455d58" }}>Delete</TransparentButton>
                                </div>
                            }      
                />
                <TextCard
                    style={{ width: '100%', minHeight: '32rem' }}
                    Title="More Info"
                    Text={
                        <>
                            <p><span className='bold'>Email:</ span> {user.email}</p>
                            <br/>
                            <p><span className='bold'>Phone:</span> {user.phone}</p>
                            <br/>
                            <p><span className='bold'>Country:</span> {user.country}</p>
                            <br/>
                            <p><span className='bold'>City:</ span> {user.city}</p>
                            <br/>
                            <p><span className='bold'>Address:</span> {user.address}</p>
                            <br/>
                            <p><span className='bold'>Postal Code:</span> {user.postalcode}</p>
                        </>
                        }
                    titleClass={"titleClass"}
                />
            </Row>
        </Container>
    );
};

export default Profile;