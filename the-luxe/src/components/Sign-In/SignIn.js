import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Card, Row, Alert } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../../contexts/Alert";
import FormInput from "../Form/Input";
import { ProfileContext } from "../../contexts/ProfileContext";

const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlertWithTimeout, alertMessage, showAlert, alertStyle } =
    useContext(AlertContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setProfileData, setIsSignedIn } = useContext(ProfileContext);

  const navigate = useNavigate();

  if (lockedUntil && Date.now() < lockedUntil) {
    const minutesLeft = Math.ceil((lockedUntil - Date.now()) / 60000);
    showAlertWithTimeout(
      `Too many failed attempts. Please try again in ${minutesLeft} minutes`,
      "alert-danger"
    );
    return;
  }
  
  

  const emailIsValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const passwordIsValid = (password) => {
    const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if(!email | !password){
      showAlertWithTimeout( "All fields are required", "alert-danger")
      return
    }

    if(!emailIsValid(email)){
      showAlertWithTimeout( "Invalid email or password", "alert-danger")
      return
    }

    if(!passwordIsValid(password)){
      showAlertWithTimeout( "Invalid email or password", "alert-danger")
      return
    }
    const apiURL = process.env.REACT_APP_API_BASE_URL;

    try {
      const response = await fetch(`${apiURL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setProfileData(data);
        setIsSignedIn(true);
        showAlertWithTimeout(
          "You have successfully logged in!",
          "alert-success",
        );
        navigate("/");
      } else {
        showAlertWithTimeout("Invalid email or password", "alert-danger");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      showAlertWithTimeout(
        "An error occurred. Please try again later.",
        "alert-danger",
      );

      setLoginAttempts(prev => prev + 1);
      
      if (loginAttempts + 1 >= MAX_ATTEMPTS) {
        setLockedUntil(Date.now() + LOCKOUT_TIME);
        setLoginAttempts(0);
      }
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
      <Card className="signin">
        <Form
          className="shadow p-4 rounded signin-form"
          onSubmit={handleSubmit}
        >
          <h1 className="h4 mb-2 text-center">Sign In</h1>
          <p>
            If you have not created an account yet, then please{" "}
            <Button
              className="text-muted px-0"
              variant="link"
              as={Link}
              to="/register"
            >
              {" "}
              Register{" "}
            </Button>{" "}
            first.
          </p>
          <FormInput
            label={"Email"}
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
                    Signing in...
                  </>
                  ) : (
                  'Log In'
                  )}
            </GreenButton>
          </Row>
          <Row className="d-grid justify-content-end">
            <a
              className="text-muted px-0"
              href="http:localhost:3001/forgot-password"
            >
              Forgot password?
            </a>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
