import React, { useContext, useState, useEffect } from "react";
import { Card, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AlertContext } from "../../contexts/Alert";
import FormInput from "../Form/Input";
import GreenButton from "../Buttons/GreenButton";
import { ProfileContext } from "../../contexts/ProfileContext";
import "./UpdateProfile.css";

const UpdateProfile = ({ handleExit }) => {
  const { showAlertWithTimeout } = useContext(AlertContext);
  const { profileData, setProfileData } = useContext(ProfileContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dob, setDob] = useState("");

  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  useEffect(() => {
    setFirstName(profileData.first_name);
    setLastName(profileData.last_name);
    setPhone(profileData.phone);
    setAddress(profileData.address);
    setCity(profileData.city);
    setCountry(profileData.country);
    setPostalCode(profileData.postal_code);
    setDob(profileData.date_of_birth.substring(0, 10));
  }, [profileData]);

  const setChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      phone,
      address,
      city,
      country,
      postalCode,
      dob,
    };

    const apiURL = process.env.REACT_APP_API_BASE_URL;

    try {
      const response = await fetch(`${apiURL}/update-profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data === "Update successful") {
        showAlertWithTimeout("Profile updated successfully", "alert-success");
        setProfileData((prevData) => ({
          ...prevData,
          first_name: firstName,
          last_name: lastName,
          phone,
          address,
          city,
          country,
          postal_code: postalCode,
          date_of_birth: dob,
        }));
        handleExit();
      } else {
        showAlertWithTimeout(
          "An error occurred. Try again later.",
          "alert-danger",
        );
        handleExit();
      }
    } catch (error) {
      console.error(error.message);
      showAlertWithTimeout(
        "An error occurred. Try again later.",
        "alert-danger",
      );
      handleExit();
    }
  };

  return (
    <Card className="update">
      <Form className="shadow p-4 rounded update-form" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-button"
          onClick={handleExit}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="h4 mb-2 text-center">Edit Profile</h1>
        <FormInput
          value={firstName}
          label={"First Name"}
          type={"text"}
          onChange={(e) => setChange(e, setFirstName)}
          required
        />
        <FormInput
          value={lastName}
          label={"Last Name"}
          type={"text"}
          onChange={(e) => setChange(e, setLastName)}
          required
        />
        <FormInput
          value={phone}
          label={"Phone"}
          type={"tel"}
          onChange={(e) => setChange(e, setPhone)}
          required
        />
        <FormInput
          value={address}
          label={"Address"}
          type={"text"}
          onChange={(e) => setChange(e, setAddress)}
          required
        />
        <FormInput
          value={city}
          label={"City"}
          type={"text"}
          onChange={(e) => setChange(e, setCity)}
          required
        />
        <FormInput
          value={country}
          label={"Country"}
          type={"text"}
          onChange={(e) => setChange(e, setCountry)}
          required
        />
        <FormInput
          value={postalCode}
          label={"Postal Code"}
          type={"text"}
          onChange={(e) => setChange(e, setPostalCode)}
          required
        />
        <FormInput
          value={dob}
          label={"Date of Birth"}
          type={"date"}
          onChange={(e) => setChange(e, setDob)}
          required
        />
        <Row className="d-flex justify-content-center">
          <GreenButton
            type="submit"
            className={"m-1"}
          >
            Save Changes
          </GreenButton>
        </Row>
      </Form>
    </Card>
  );
};

export default UpdateProfile;
