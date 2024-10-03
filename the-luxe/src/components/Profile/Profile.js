import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import TextCard from '../Cards/TextCard';
import './Profile.css';
import TransparentButton from '../Buttons/TransparentButton';
import { ProfileContext } from '../../contexts/ProfileContext';
const Profile = () => {
    const { profileData } = useContext(ProfileContext)
    if(!profileData){
        fetch("localhost:3000/profile/", {
            method: "GET",
        })
    }
    const dob = profileData.date_of_birth.substring(0, profileData.date_of_birth.indexOf("T"))
    const joined = profileData.joined.substring(0, profileData.joined.indexOf("T"))

    return (
        <Container style={{padding: "3rem 0", overflowX:"hidden"}}fluid>
            {console.log(profileData)}
            <h1 className='profile-title'>Profile</h1>
            <Row className='d-flex justify-content-center' style={{}}>
                <TextCard
                    lg={6}
                    style={{ width: '30rem', minHeight: '10rem', }}
                    Title={profileData.first_name}
                    Text={
                        <>
                        <p><span className='bold'>Full Name:</ span> {profileData.first_name}</p>
                        <p><span className='bold'>Date of Birth:</span> {dob}</p>
                        <p><span className='bold'>Joined:</span> {joined}</p>
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
                    lg={6}
                    style={{ width: '30rem', minHeight: '10rem' }}
                    Text={
                        <>
                            <p><span className='bold'>Email:</ span> {profileData.email}</p>
                            <p><span className='bold'>Phone:</span> {profileData.phone}</p>
                            <p><span className='bold'>Country:</span> {profileData.country}</p>
                            <p><span className='bold'>City:</ span> {profileData.city}</p>
                            <p><span className='bold'>Address:</span> {profileData.address}</p>
                            <p><span className='bold'>Postal Code:</span> {profileData.postal_code}</p>
                        </>
                        }
                />
            </Row>
        </Container>
    );
};

export default Profile;