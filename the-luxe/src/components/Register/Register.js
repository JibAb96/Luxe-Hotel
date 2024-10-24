import React, { useContext, useState } from "react";
import { Form, Card, Row } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import FormInput from "../Form/Input";
import { AlertContext } from "../../contexts/Alert";
const Register = () => {
  const { showAlertWithTimeout } = useContext(AlertContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dob, setDob] = useState("");



  const [helperText, setHelperText] = useState({
    email: { text: "", color: "" },
    password: { text: "", color: "text-danger" },
    passwordAgain: { text: "", color: "text-danger" },
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

  const passwordAgainChange = (e) => {
    setPasswordAgain(e.target.value);
    if (!validatePasswordAgain(password, e.target.value)) {
      updateHelperText("passwordAgain", "Your passwords do not match", "text-danger");
    } else {
      updateHelperText("passwordAgain", "Your password match!", "text-success");
    }
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validatePassword = (password) => passwordRegex.test(password);

  const validatePasswordAgain = (password, passwordAgain) =>
    password === passwordAgain;

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (email) => emailRegex.test(email);

  const navigate = useNavigate();
  
  const validateForm = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPasswordAgainValid = validatePasswordAgain(password, passwordAgain);
  
    if (!isEmailValid || !isPasswordValid || !isPasswordAgainValid) {
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

    const dobDate = dob.substring(0, 10);
    const formData = {
      email,
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
        showAlertWithTimeout(data.message || "Registration failed", "alert-danger");
      }
    } catch (error) {
      console.error("Error registering in:", error);
      showAlertWithTimeout(
        "An error occurred. Please try again.",
        "alert-danger",
      );
    }
  };
  return (
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
          label={"First-Name"}
          type={"text"}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <FormInput
          label={"Last-Name"}
          type={"text"}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <FormInput
          label={"Phone"}
          type={"tel"}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <FormInput
          label={"Address"}
          type={"text"}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <FormInput
          label={"City"}
          type={"text"}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <FormInput
          label={"Country"}
          type={"text"}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <FormInput
          label={"Postal-Code"}
          type={"text"}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
        <FormInput
          label={"Date of Birth"}
          type={"date"}
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
          value={passwordAgain}
          onChange={passwordAgainChange}
          helperText={helperText.passwordAgain.text}
          helperTextColor={helperText.passwordAgain.color}
          required
        />
        <Row className="d-flex justify-content-center">
          <GreenButton
            type="submit"
            className={"m-1"}
          >
            Register
          </GreenButton>
        </Row>
      </Form>
    </Card>
  );
};

export default Register;
