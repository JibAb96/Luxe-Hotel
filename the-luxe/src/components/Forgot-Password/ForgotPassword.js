import React, { useContext, useState } from "react";
import { Card, Form, Row, Alert } from "react-bootstrap";
import FormInput from "../Form/Input";
import TransparentButton from "../Buttons/TransparentButton";
import "./ForgotPassword.css";
import { AlertContext } from "../../contexts/Alert";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { showAlertWithTimeout, alertMessage, alertStyle, showAlert } =
    useContext(AlertContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (email) => emailRegex.test(email);

    const apiURL = process.env.REACT_APP_API_BASE_URL;

    try {
      if (!validateEmail(email)) {
        return showAlertWithTimeout("Invalid email format", "alert-danger");
      }
      const response = await fetch(`${apiURL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        return showAlertWithTimeout("Invalid email", "alert-danger");
      }
      navigate("/");
      showAlertWithTimeout(
        "An email has been sent to reset your password",
        "alert-success",
      );
    } catch (error) {
      showAlertWithTimeout(
        "An error occurred with the server. Please try again later",
        "alert-danger",
      );
    }
  };

  return (
    <div>
      {showAlert && (
        <Alert className={`alert ${alertStyle}`} role="alert">
          {alertMessage}
        </Alert>
      )}
      <Card className="f-password">
        <Form
          className="shadow p-4 rounded signin-form f-password-form"
          onSubmit={handleSubmit}
        >
          <h1 className="h4 mb-2 text-center">Password Reset</h1>
          <p className="text-center">
            Forgotten your password?
            <br />
            Enter your email address below, we'll send you an email allowing you
            to reset it.
          </p>
          <FormInput
            label={"Email"}
            type={"text"}
            placeholder={"Email address"}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Row className="d-flex justify-content-center">
            <TransparentButton
              type="submit"
              className={"m-1"}
            >
              Reset Password
            </TransparentButton>
          </Row>
          <p className="bold">
            Contact us if you have any trouble resetting your password.
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
