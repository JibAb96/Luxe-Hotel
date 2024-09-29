import React, { useContext, useState } from 'react';
import { Form, Button, Card, Row, Alert} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./SignIn.css"
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../Alert/Alert";
import FormInput from '../Form/Input';
import { useEffect } from 'react';

const SignIn = ({setIsSignedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAlertMessage, setShowAlert, setAlertStyle, alertMessage, showAlert, alertStyle} = useContext(AlertContext);
   
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:3000/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
                
            const data = await response.json();

            if(response.ok){
                setAlertMessage("You have successfully logged in!");
                setShowAlert(true);
                setAlertStyle("alert-success");
                setIsSignedIn(true);
                navigate("/");
    
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                } else {
                    setAlertMessage("Invalid email or password");
                    setAlertStyle("alert-danger");
                    setShowAlert(true);
        
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 2000);
                }
            } catch (error) {
                console.error("Error logging in:", error);
                setAlertMessage("An error occurred. Please try again.");
                setAlertStyle("alert-danger");
                setShowAlert(true);
        
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            }
    };
    

    return (
        <div>
            {showAlert &&  <Alert className={`alert ${alertStyle}`} role="alert">{alertMessage}</Alert>}
            <Card className="signin">
                <Form className="shadow p-4 rounded signin-form" onSubmit={handleSubmit} >
                    <h1 className="h4 mb-2 text-center">Sign In</h1>
                    <p>
                        If you have not created an account yet, then please <Button
                        className="text-muted px-0"
                        variant="link"
                        as={Link}
                        to="/register"
                        > Register </Button> first.
                    </p>
                    <FormInput 
                        label={"Email"} 
                        type={"text"} 
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
                        <TransparentButton type="submit" style={{
                            "margin":"1rem",
                            "backgroundColor": "#455d58"
                            }}>
                            Log In
                        </TransparentButton>
                    </Row>
                    <Row className="d-grid justify-content-end">
                        <Button
                            className="text-muted px-0"
                            variant="link"
                        >
                            Forgot password?
                        </Button>
                    </Row>
                </Form>
            </Card>
        </div>
  );
};



export default SignIn;