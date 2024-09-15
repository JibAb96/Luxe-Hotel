import React, { useContext, useState } from 'react';
import { Form, Button, Card, Row, Alert} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./SignIn.css"
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../Alert/Alert";
import FormInput from '../Form/Input';
import { useEffect } from 'react';

const SignIn = ({setIsSignedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setAlertMessage, setShowAlert} = useContext(AlertContext);
   
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://improved-happiness-44q47qgrr46cvw-3000.app.github.dev/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
        .then(data => {if(data === "success"){
            setAlertMessage("You have successfully logged in!");
            setShowAlert(true);
            setIsSignedIn(true);
            navigate("/");
            setTimeout(() => {
            setShowAlert(false);
            }, 2000);
        }})
     
    }
    const {alertMessage, showAlert} = useContext(AlertContext);
    return (
        <div>
            {showAlert &&  <Alert className="alert alert-success" role="alert">{alertMessage}</Alert>}
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
                        label={"Username"} 
                        type={"text"} 
                        placeholder={"Username"} 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
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