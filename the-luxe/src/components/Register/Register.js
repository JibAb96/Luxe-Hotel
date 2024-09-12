import React from "react";
import { Form, Button, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./Register.css"
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <Card className="register">
            <Form className="shadow p-4 bg-white rounded" >
                <h1 className="h4 mb-2 text-center">Register</h1>
                <p>
                    If you have already created an account, then please <Button
                    className="text-muted px-0"
                    variant="link"
                    as={Link}
                    to={"/signin"}
                    > Sign In. </Button>
                </p>
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="first-name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="last-name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="phone-number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="post-code">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type="text"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
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
                <Form.Group className="mb-2" controlId="passwordv">
                    <Form.Label>Password (again)</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password (again)"
                        required
                    />
                </Form.Group>
                <Row className="d-flex justify-content-center">
                    <TransparentButton type="submit" style={{
                        "margin":"1rem",
                        "backgroundColor": "#455d58"
                        }}>
                        Register
                    </TransparentButton>
                </Row>
            </Form>
        </Card>
  );
};

export default Register