import React, { useContext, useState, useEffect } from "react";
import { Card, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AlertContext } from "../../contexts/Alert";
import FormInput from "../Form/Input";
import GreenButton from "../Buttons/GreenButton";
import { ProfileContext } from "../../contexts/ProfileContext";
import styles from "./UpdateProfile.module.css";

const UpdateProfile = ({ handleExit }) => {
  const { showAlertWithTimeout } = useContext(AlertContext);
  const { profileData, setProfileData } = useContext(ProfileContext);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    dob: "",
  });
 

  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  useEffect(() => {
      if(profileData){
        setFormData({
          firstName: profileData.first_name || "",
          lastName: profileData.last_name || "",
          phone: profileData.phone || "",
          address: profileData.address || "",
          city: profileData.city || "",
          country: profileData.country || "",
          postalCode: profileData.postal_code || "",
          dob: profileData.date_of_birth.substring(0, 10) || "",
      })}
    }, [profileData]);

  const setChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const apiURL = process.env.REACT_APP_API_BASE_URL;

    try {
      const response = await fetch(`${apiURL}/update-profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        showAlertWithTimeout("Profile updated successfully", "alert-success");
        setProfileData((prevData) => ({
          ...prevData,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          postal_code: formData.postalCode,
          date_of_birth: formData.dob,
        }));
        handleExit();
      } else {
        const error = await response.json();
        showAlertWithTimeout(
          error.message || "An error occurred. Try again later.",
          "alert-danger",
        );
        handleExit();
      }
    } catch (error) {
      console.error(error.message);
      showAlertWithTimeout(
        error.message || "An error occurred. Try again later.",
        "alert-danger",
      );
      handleExit();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`${styles.card}`}>
      <Form className={`${styles.form} shadow p-4 rounded`} onSubmit={handleSubmit}>
        <button
          type="button"
          className={`${styles.exit}`}
          onClick={handleExit}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="h4 mb-2 text-center">Edit Profile</h1>
        <FormInput
          value={formData.firstName}
          label={"First Name"}
          type={"text"}
          name={"firstName"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.lastName}
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.phone}
          label={"Phone"}
          type={"tel"}
          name={"phone"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.address}
          label={"Address"}
          type={"text"}
          name={"address"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.city}
          label={"City"}
          type={"text"}
          name={"city"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.country}
          label={"Country"}
          type={"text"}
          name={"country"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.postalCode}
          label={"Postal Code"}
          type={"text"}
          name={"postalCode"}
          onChange={setChange}
          required
        />
        <FormInput
          value={formData.dob}
          label={"Date of Birth"}
          type={"date"}
          name={"dob"}
          onChange={setChange}
          required
        />
        <Row className="d-flex justify-content-center">
          <GreenButton
            type="submit"
            className={"m-1"}
            disabled={isLoading}
          >
            {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Updating...
                  </>
                  ) : (
                  'Save Changes'
                  )}
          </GreenButton>
        </Row>
      </Form>
    </Card>
  );
};

export default UpdateProfile;
