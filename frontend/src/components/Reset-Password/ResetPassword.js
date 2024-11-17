import React, { useState, useContext } from "react";
import styles from "./ResetPassword.module.css";
import { Card, Form, Alert, Row } from "react-bootstrap";
import FormInput from "../Form/Input";
import GreenButton from "../Buttons/GreenButton";
import { AlertContext } from "../../contexts/Alert";
import { useNavigate, useParams } from "react-router-dom";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [helperText, setHelperText] = useState({
    password: { text: "", color: "text-danger" },
    confirmPassword: { text: "", color: "text-danger" },
  });
  const { showAlertWithTimeout, showAlert, alertMessage, alertStyle } =
    useContext(AlertContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const updateHelperText = (field, text, color) => {
    setHelperText((prev) => ({ ...prev, [field]: { text, color } }));
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
  }

  const confirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    
    setConfirmPassword(newConfirmPassword);
    
    if (!validateConfirmPassword(password,newConfirmPassword)) {
      updateHelperText("confirmPassword", "Your passwords do not match", "text-danger");
    } else {
      updateHelperText("confirmPassword", "Your password match!", "text-success");
    }
  };
  
  
  const validatePassword = (password) => PASSWORD_REGEX.test(password);

  const validateConfirmPassword = (password, confirmPassword) =>
    password === confirmPassword;

  const validateForm = (password, confirmPassword) => {
    
    if(!validatePassword(password)){
      return false;
    }
    
    if(!validateConfirmPassword(password, confirmPassword)){
      return false;
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validateForm(password, confirmPassword)){
      showAlertWithTimeout("Please fix the validation errors before submitting", "alert-danger");
      return;
    }

    setIsLoading(true);

    const apiURL = process.env.REACT_APP_API_BASE_URL || '/api';
    if (!apiURL) {
      console.error('API URL not configured');
    };

    try {
      const response = await fetch(`${apiURL}/reset-password/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        showAlertWithTimeout( data.message || "An error has occurred", "alert-danger");
        return;
      }
      navigate("/");
      showAlertWithTimeout(
        "Password has been changed successfully",
        "alert-success",
      );
    } catch (error) {
      console.error("Error resetting:", error);
      showAlertWithTimeout(
        error.message  || "Server error. Please try again later",
        "alert-danger",
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
          className={`${styles.form} shadow p-4 rounded`}
          onSubmit={handleSubmit}
        >
          <h1 className="h4 mb-2 text-center">Change Password</h1>
          <FormInput
            label={"Password"}
            type={"password"}
            aria-label="Enter new password"
            onChange={passwordChange}
            helperText={helperText.password.text}
            helperTextColor={helperText.password.color}
            required
          />
          <FormInput
            label={"Confirm Password"}
            type={"password"}
            aria-label="Confirm new password"
            onChange={confirmPasswordChange}
            helperText={helperText.confirmPassword.text}
            helperTextColor={helperText.confirmPassword.color}
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
                    Changing...
                  </>
                  ) : (
                  'Change Password'
                  )}
            </GreenButton>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
