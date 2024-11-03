import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Card, Row, Alert } from "react-bootstrap";
import GreenButton from "../Buttons/GreenButton";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../contexts/Alert";
import FormInput from "../Form/Input";
import { ProfileContext } from "../../contexts/ProfileContext";

const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // eslint-disable-next-line
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { setProfileData, setIsSignedIn } = useContext(ProfileContext);
  const { showAlertWithTimeout, alertMessage, showAlert, alertStyle } =
    useContext(AlertContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Set Remember Me checked if email was remembered
    }
  }, []);

  useEffect(() => {
    const savedLockedUntil = localStorage.getItem("lockedUntil");
    if (savedLockedUntil && Date.now() < savedLockedUntil) {
      setLockedUntil(savedLockedUntil);
    } 
    if (lockedUntil) {
      localStorage.setItem("lockedUntil", lockedUntil);
    }
  }, [lockedUntil]);
  
 
  

  const navigate = useNavigate();

  const emailIsValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const passwordIsValid = (password) => {
    const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password)
  }

  const validateInputs = (email, password) => {
    if(!email || !password){
      showAlertWithTimeout( "All fields are required", "alert-danger")
      console.log(email, password)
      return false
    }

    if(!emailIsValid(email) || !passwordIsValid(password)){
      showAlertWithTimeout( "Invalid email or password", "alert-danger")
      return false 
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (lockedUntil && Date.now() < lockedUntil) {
      const minutesLeft = Math.ceil((lockedUntil - Date.now()) / 60000);
      showAlertWithTimeout(
        `Too many failed attempts. Please try again in ${minutesLeft} minutes`,
        "alert-danger"
      );
      return;
    }

    setIsLoading(true);

    if (!validateInputs(email, password)) {
      setIsLoading(false);  
      return;
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
        setProfileData(data.user);
        localStorage.setItem('authToken', data.token);
        setIsSignedIn(true);
        showAlertWithTimeout(
          "You have successfully logged in!",
          "alert-success",
        );

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        navigate("/");
      } else {
        showAlertWithTimeout("Invalid email or password", "alert-danger");
        console.error(`Server Error: ${response.status}`);
        
        setLoginAttempts((prevAttempts) => {
          const newAttempts = prevAttempts + 1;
          if (newAttempts >= MAX_ATTEMPTS) {
            setLockedUntil(Date.now() + LOCKOUT_TIME);
            return 0; 
          }
          return newAttempts;
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      showAlertWithTimeout(
        "An error occurred. Please try again later.",
        "alert-danger",
      );
    } finally {
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
      <Card className={styles.card}>
        <Form
          className={`${styles.form} shadow p-4 rounded`}
          onSubmit={handleSubmit}
        >
          <h1 className="h4 mb-2 text-center">Sign In</h1>
          <p>
            If you have not created an account yet, then please{" "}
            <a href="/register" className={styles.anchor}>
              {" "}
              Register
            </a>
            {" "}
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
            type={showPassword ? "text" : "password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightElement={
              <Button
                type="button"
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            }
            required
          />
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="rememberMe"
              label="Remember Me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          </Form.Group>
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
              href="/forgot-password"
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
