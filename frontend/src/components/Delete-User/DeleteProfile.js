import React, { useContext, useState } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertContext } from "../../contexts/Alert";
import styles from "./DeleteProfile.module.css";
import { ProfileContext } from "../../contexts/ProfileContext";

const DeleteProfile = ({ handleExit }) => {
  const { showAlertWithTimeout, showAlert, alertMessage, alertStyle } = useContext(AlertContext);
  const { setIsSignedIn } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];

  const deleteUser = async () => {

    try {
      
      const apiURL = process.env.REACT_APP_API_BASE_URL;
      
      setIsLoading(true);
      
      const response = await fetch(`${apiURL}/delete-profile/${userId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if(response.ok){
        setIsSignedIn(false);
        navigate("/");
        showAlertWithTimeout(
          "You have successfully deleted your profile!",
          "alert-success",
        );
        localStorage.removeItem("profileData");
        localStorage.removeItem("isSignedIn")
      } else {
        showAlertWithTimeout(
          data.message || "An error occurred. Please try again.",
          "alert-danger",
        );
      }
    } catch (error) {
      console.error(error.message);
      console.error("Error logging in:", error);
      showAlertWithTimeout(
        error.message || "An error occurred. Please try again.",
        "alert-danger",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container className={styles.container} fluid>
        <button
          type="button"
          className={styles.exit}
          onClick={handleExit}
          aria-label="Close"
        >
          &times;
        </button>
        {showAlert && (
        <Alert className={`alert ${alertStyle}`} role="alert">
          {alertMessage}
        </Alert>
        )}
        <h1 className={styles.title}>Delete Profile</h1>
        <p className={styles.paragraph}>
          Are you sure you want to delete your
          <span className={styles.bold}> Profile</span>,
          <span className={styles.bold}> Account</span> and
          <span className={styles.bold}> Reservations</span>?
        </p>
        <Row>
          <GreenButton
            onClick={deleteUser}
            className={styles.delete}
            ariaLabel={"Delete profile button"}
          >
            {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Deleting...
                  </>
                  ) : (
                  'Delete'
                  )}
          </GreenButton>
          <GreenButton
            onClick={handleExit}
            ariaLabel={"Keep profile button"}
          >
            Keep
          </GreenButton>
        </Row>
        <h1 className={styles.title}>
          {" "}
          It's been a pleasure having you here!
        </h1>
        <p className={styles.paragraph}>We hope to see you again soon.</p>
      </Container>
    </>
  );
};

export default DeleteProfile;
