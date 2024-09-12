import React from "react";
import { Form, Button, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./SignIn.css"

const SignIn = () => {
    return (
        <Card className="signin">
            <Form className="shadow p-4 bg-white rounded" >
                    <h1 className="h4 mb-2 text-center">Sign In</h1>
                    <p>
                        If you have not created an account yet, then please <Button
                        className="text-muted px-0"
                        variant="link"
                        > Register </Button> first.
                    </p>
                    <Form.Group className="mb-2" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
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
  );
};

export default SignIn;