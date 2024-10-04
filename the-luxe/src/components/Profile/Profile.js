import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TextCard from '../Cards/TextCard';
import './Profile.css';
import TransparentButton from '../Buttons/TransparentButton';
import { ProfileContext } from '../../contexts/ProfileContext';
import { AlertContext } from '../../contexts/Alert';
import DeleteProfile from '../Delete-User/DeleteProfile';
import UpdateProfile from '../Update-Profile/UpdateProfile';
import { Alert } from 'react-bootstrap';
const Profile = () => {
    const [showDeleteProfile, setShowDeleteProfile] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    
    const { profileData } = useContext(ProfileContext)
    const { alertStyle, alertMessage, showAlert } = useContext(AlertContext)

    const handleDeleteSwitch = () => {
        setShowDeleteProfile(true)
    }

    const handleEditSwitch = () => {
        setShowEditProfile(true)
    }

    const handleExit = () => {
        setShowEditProfile(false)
    }
    
    const dob = profileData.date_of_birth
    const joined = profileData.joined.substring(0, profileData.joined.indexOf("T"))

    return (
        <>
            {showAlert &&  <Alert className={`alert ${alertStyle}`} role="alert">{alertMessage}</Alert>}
            <Container style={{padding: "3rem 0", overflowX:"hidden"}}fluid>
                <h1 className='profile-title'>Profile</h1>
                <Row className='d-flex justify-content-center'>
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
                                        <TransparentButton 
                                        style={{minWidth:"7rem", backgroundColor:"#455d58" }}
                                        onClick={handleEditSwitch}>Edit</TransparentButton>
                                        <TransparentButton 
                                        style={{minWidth:"7rem", backgroundColor:"#455d58" }} 
                                        onClick={handleDeleteSwitch}>Delete</TransparentButton>
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
                {showDeleteProfile && (
                    <div className="overlay">
                        <DeleteProfile/>
                    </div>
                )}
                {showEditProfile && (
                    <div className="overlay">
                        <UpdateProfile handleExit={handleExit}/>
                    </div>
                )}
            </Container>
        
            
        </>
    );
};

export default Profile;