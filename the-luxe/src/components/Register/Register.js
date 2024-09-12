import React from "react";
import { Form, Button, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./Register.css"
import { Link } from "react-router-dom";
import FormInput from "../Form/Input";
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
                <FormInput label={"Email"} type={"email"} placeholder={"Email Address"} />
                <FormInput label={"Username"} type={"text"} placeholder={"Username"}/>
                <FormInput label={"First-Name"} type={"text"} />
                <FormInput label={"Last-Name"} type={"text"} />
                <FormInput label={"Phone"} type={"tel"}/>
                <FormInput label={"Address"} type={"text"}/>
                <FormInput label={"City"} type={"text"}/>
                <FormInput label={"Country"} type={"text"} />
                <FormInput label={"Postal-Code"} type={"text"} />
                <FormInput label={"Date of Birth"} type={"date"} />
                <FormInput label={"Password"} type={"password"} placeholder={"Password"} />
                <FormInput label={"Password (again)"} type={"password"} placeholder={"Password (again)"} />
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