import React, { useContext, useState } from "react";
import { Card, Form, Row, Alert } from "react-bootstrap";
import FormInput from "../Form/Input";
import GreenButton from "../Buttons/GreenButton";
import styles from "./ForgotPassword.module.css";
import { AlertContext } from "../../contexts/Alert";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [helperText, setHelperText] = useState({
      email: { text: "", color: "" }
    });

  const { showAlertWithTimeout, alertMessage, alertStyle, showAlert } =
    useContext(AlertContext);
    
  const updateHelperText = (field, text, color) => {
      setHelperText((prev) => ({ ...prev, [field]: { text, color } }));
    };
  
  const validateEmail = (email) => {
    if (!email?.trim()) return false;
    return EMAIL_REGEX.test(email.trim());}
  
  const handleEmailChange = (e) => {
      setEmail(e.target.value);
      if (!validateEmail(e.target.value)) {
        updateHelperText("email", "Oops! That doesn’t look like a valid email. Try again.", "text-danger");
      } else {
        updateHelperText("email", "Perfect! Your email is valid.", "text-success");
  
      }
    };

  
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!validateEmail(email)){
      showAlertWithTimeout("Please enter a valid email address", "alert-danger");
      return;
        }

    setIsLoading(true);

    const apiURL = process.env.REACT_APP_API_BASE_URL || '/api';

    try {

      const response = await fetch(`${apiURL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");  
      }
      navigate("/");
      showAlertWithTimeout(
        "Password reset instructions have been sent to your email",
        "alert-success"
      );
    } catch (error) {
      showAlertWithTimeout(
        error.message || "An error occurred. Please try again later",
        "alert-danger"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {showAlert && (
        <Alert className={`alert ${alertStyle}`} role="alert">
          {alertMessage}
        </Alert>
      )}
      <Card className={styles.card}>
        <Form
          className={`shadow p-4 rounded ${styles.form}`}
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
            label={"Email Address"}
            type={"email"}
            placeholder={"Email address"}
            onChange={handleEmailChange}
            helperText={helperText.email.text}
            helperTextColor={helperText.email.color}
            required
          />
          <Row className="d-flex justify-content-center">
            <GreenButton
              type="submit"
              className={"m-1"}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Sending...
                  </>
                  ) : (
                  'Reset Password'
                  )}
            </GreenButton>
          </Row>
          <p className={styles.bold}>
            Contact us if you have any trouble resetting your password.
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
