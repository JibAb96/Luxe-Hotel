import React, { useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import TextCard from "../Cards/TextCard";
import "./Profile.css";
import GreenButton from "../Buttons/GreenButton";
import { ProfileContext } from "../../contexts/ProfileContext";
import { AlertContext } from "../../contexts/Alert";
import DeleteProfile from "../Delete-User/DeleteProfile";
import UpdateProfile from "../Update-Profile/UpdateProfile";
import { Alert } from "react-bootstrap";
const Profile = () => {
  const [showDeleteProfile, setShowDeleteProfile] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const { profileData } = useContext(ProfileContext);
  const { alertStyle, alertMessage, showAlert } = useContext(AlertContext);

  const handleDeleteSwitch = () => {
    setShowDeleteProfile(!showDeleteProfile);
  };

  const handleEditSwitch = () => {
    setShowEditProfile(!showEditProfile);
  };

  const name = profileData?.first_name || "N/A";
  const dob = profileData?.date_of_birth?.substring(0, 10) || "N/A";
  const joined = profileData?.joined?.substring(0, 10) || "N/A";
  const email = profileData?.email || "N/A";
  const phone = profileData?.phone || "N/A";
  const country = profileData?.country || "N/A";
  const city = profileData?.city || "N/A";
  const address = profileData?.address || "N/A";
  const postalCode = profileData?.postal_code || "N/A";
  

  return (
    <>
      {showAlert && (
        <Alert className={`alert ${alertStyle}`} role="alert">
          {alertMessage}
        </Alert>
      )}
      <Container className="profile-container" fluid>
        <h1 className="profile-title">Profile</h1>
        <Row className="d-flex justify-content-center">
          <TextCard
            lg={6}
            style={{ width: "30rem", minHeight: "10rem" }}
            Title={name}
            Text={
              <>
                <p>
                  <span className="bold">Full Name:</span>{" "}
                  {name}
                </p>
                <p>
                  <span className="bold">Date of Birth:</span> {dob}
                </p>
                <p>
                  <span className="bold">Joined:</span> {joined}
                </p>
              </>
            }
            titleClass={"titleClass"}
            Element={
              <div>
                <GreenButton
                  className={"min-w"}
                  onClick={handleEditSwitch}
                >
                  Edit
                </GreenButton>
                <GreenButton
                  className={"min-w"}
                  onClick={handleDeleteSwitch}
                >
                  Delete
                </GreenButton>
              </div>
            }
          />
          <TextCard
            lg={6}
            className={"profile-card"}
            Text={
              <>
                <p>
                  <span className="bold">Email:</span> {email}
                </p>
                <p>
                  <span className="bold">Phone:</span> {phone}
                </p>
                <p>
                  <span className="bold">Country:</span> {country}
                </p>
                <p>
                  <span className="bold">City:</span> {city}
                </p>
                <p>
                  <span className="bold">Address:</span> {address}
                </p>
                <p>
                  <span className="bold">Postal Code:</span>{" "}
                  {postalCode}
                </p>
              </>
            }
          />
        </Row>
        {showDeleteProfile && (
          <div className="overlay">
            <DeleteProfile handleExit={handleDeleteSwitch} />
          </div>
        )}
        {showEditProfile && (
          <div className="overlay">
            <UpdateProfile handleExit={handleEditSwitch} />
          </div>
        )}
      </Container>
    </>
  );
};

export default Profile;
