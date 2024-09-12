import React, { useContext }from "react";
import { Form, Button, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Form/Input";
import { AlertContext } from "../Alert/Alert";
const Register = () => {
    const {setAlertMessage, setShowAlert} = useContext(AlertContext);

    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        setAlertMessage("You have successfully registered in!");
        setShowAlert(true);
        navigate("/signin");
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);    }
    return (
        <Card className="register">
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                <h1 className="h4 mb-2 text-center">Register</h1>
                <p>
                    If you have already created an account, then please <Button
                    className="text-muted px-0"
                    variant="link"
                    as={Link}
                    to={"/signin"}
                    > Sign In. </Button>
                </p>
                <FormInput label={"Email"} type={"email"} placeholder={"Email Address"} required/>
                <FormInput label={"Username"} type={"text"} placeholder={"Username"} required/>
                <FormInput label={"First-Name"} type={"text"} required/>
                <FormInput label={"Last-Name"} type={"text"} required/>
                <FormInput label={"Phone"} type={"tel"} required/>
                <FormInput label={"Address"} type={"text"} required/>
                <FormInput label={"City"} type={"text"} required/>
                <FormInput label={"Country"} type={"text"} required/>
                <FormInput label={"Postal-Code"} type={"text"} required/>
                <FormInput label={"Date of Birth"} type={"date"} required/>
                <FormInput label={"Password"} type={"password"} placeholder={"Password"} required/>
                <FormInput label={"Password (again)"} type={"password"} placeholder={"Password (again)"} required/>
                <Row className="d-flex justify-content-center">
                    <TransparentButton type="submit" style={{"margin":"1rem","backgroundColor": "#455d58"}}>
                        Register
                    </TransparentButton>
                </Row>
            </Form>
        </Card>
  );
};

export default Register