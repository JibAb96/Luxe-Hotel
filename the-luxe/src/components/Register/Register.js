import React, { useContext, useState } from "react";
import { Form, Card, Row, Alert } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import FormInput from "../Form/Input";
import { AlertContext } from "../../contexts/Alert";
const Register = () => {
  const { showAlertWithTimeout, showAlert, alertMessage, alertStyle } = useContext(AlertContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [helperText, setHelperText] = useState({
    email: { text: "", color: "" },
    password: { text: "", color: "text-danger" },
    confirmPassword: { text: "", color: "text-danger" },
  });

  const updateHelperText = (field, text, color) => {
    setHelperText((prev) => ({ ...prev, [field]: { text, color } }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      updateHelperText("email", "Oops! That doesn’t look like a valid email. Try again.", "text-danger");
    } else {
      updateHelperText("email", "Perfect! Your email is valid.", "text-success");

    }
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      updateHelperText(
        "password",
         "Your password must contain at least 8 characters, one uppercase letter, lowercase letter, and number.",
         "text-danger"
      )
    } else {
      updateHelperText("password", "Your password is strong!", "text-success");
    }
  };

  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (!validateConfirmPassword(password, e.target.value)) {
      updateHelperText("confirmPassword", "Your passwords do not match", "text-danger");
    } else {
      updateHelperText("confirmPassword", "Your password match!", "text-success");
    }
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validatePassword = (password) => passwordRegex.test(password);

  const validateConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword;

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (email) => emailRegex.test(email);

  const navigate = useNavigate();
  
  const validateForm = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);
  
    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      const invalidInput = document.querySelector(".text-danger");
      invalidInput?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!validateForm()){
      return;
    }

    setIsLoading(true);

    const dobDate = dob.substring(0, 10);
    const formData = {
      email,
      username,
      password,
      firstName,
      lastName,
      phone,
      address,
      city,
      country,
      postalCode,
      dobDate,
    };

    const apiURL = process.env.REACT_APP_API_BASE_URL;

    try {
      const response = await fetch(`${apiURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data === "success") {
        showAlertWithTimeout(
          "You have successfully registered in!",
          "alert-success",
        );
        navigate("/signin");
      } else {
        window.scrollTo(0, 0);
        showAlertWithTimeout(data.error || "Registration failed", "alert-danger");
      }
    } catch (error) {
      window.scrollTo(0, 0);
      console.error("Error registering in:", error);
      showAlertWithTimeout(
        error.message || "An error occurred. Please try again.",
        "alert-danger",
      );
    } finally{
      setIsLoading(false);
    }
  };
  return (
    <div>
      {showAlert && (
        <Alert className={`alert ${alertStyle}`} role="alert" >
          {alertMessage}
        </Alert>
      )}  
      <Card className="register">
        <Form
          className="shadow p-4 rounded register-form"
          onSubmit={handleSubmit}
        >
          <h1 className="h4 mb-2 text-center">Register</h1>
          <p>
            We are collecting your details now, to simplify your booking later!
          </p>
          <p>You can update your information in your profile page at anytime.</p>
          <p>
            If you have already created an account, then please{" "}
            <a
              className="text-muted px-0"
              href="/signin"
            >
              {" "}
              Sign In.{" "}
            </a>
          </p>
          <FormInput
            label={"Email"}
            type={"email"}
            placeholder={"Email Address"}
            value={email}
            onChange={handleEmailChange}
            helperText={helperText.email.text}
            helperTextColor={helperText.email.color}
            required
          />
          <FormInput
          label={"Username"}
          type={"text"}
          placeholder={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
          <FormInput
            label={"First-Name"}
            type={"text"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <FormInput
            label={"Last-Name"}
            type={"text"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <FormInput
            label={"Phone"}
            type={"tel"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <FormInput
            label={"Address"}
            type={"text"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <FormInput
            label={"City"}
            type={"text"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <FormInput
            label={"Country"}
            type={"text"}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <FormInput
            label={"Postal-Code"}
            type={"text"}
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <FormInput
            label={"Date of Birth"}
            type={"date"}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <FormInput
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={passwordChange}
            helperText={helperText.password.text}
            helperTextColor={helperText.password.color}
            required
          />
          <FormInput
            label={"Password (again)"}
            type={"password"}
            placeholder={"Password (again)"}
            value={confirmPassword}
            onChange={confirmPasswordChange}
            helperText={helperText.confirmPassword.text}
            helperTextColor={helperText.confirmPassword.color}
            required
          />
          <Row className="d-flex justify-content-center">
            <GreenButton
              type="submit"
              className={`m-1 ${isLoading ? 'opacity-50' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Registering...
                    </>
                    ) : (
                    'Register'
                    )}
            </GreenButton>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
