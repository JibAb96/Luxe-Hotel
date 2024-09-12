import React, { useContext, useState } from 'react';
import { Form, Button, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./SignIn.css"
import { Link, useNavigate } from "react-router-dom";
import { AlertContext } from "../Alert/Alert";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAlertMessage, setShowAlert} = useContext(AlertContext);
   

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return;
        }
        setAlertMessage("You have successfully logged in!");
        setShowAlert(true);
        navigate("/");
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
     
    }
    return (
        <div>
            <Card className="signin">
                <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit} >
                    <h1 className="h4 mb-2 text-center">Sign In</h1>
                    <p>
                        If you have not created an account yet, then please <Button
                        className="text-muted px-0"
                        variant="link"
                        as={Link}
                        to="/register"
                        > Register </Button> first.
                    </p>
                    <Form.Group className="mb-2" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
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