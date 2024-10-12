import React, { useContext, useState }from "react";
import { Form, Button, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Form/Input";
import { AlertContext } from "../../contexts/Alert";
const Register = () => {
    const {showAlertWithTimeout} = useContext(AlertContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [firstName,  setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [dob, setDob] = useState("");
    const [username, setUsername] = useState("");

    
    
    const [helperEmailText, setHelperEmailText] = useState("");
    const [helperPasswordText, setHelperPasswordText] = useState("");
    const [helperPasswordAgainText, setHelperPasswordAgainText] = useState("");

    const [helperEmailTextColor, setHelperEmailTextColor] = useState("text-danger");
    const [helperPasswordTextColor, setHelperPasswordTextColor] = useState("text-danger");
    const [helperPasswordAgainTextColor, setHelperPasswordAgainTextColor] = useState("text-danger");
    
    const setChange = (e, setState) => {
        setState(e.target.value)
    }
   
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)){
            setHelperEmailText("Oops! That doesn’t look like a valid email. Try again.");      
        } else {
            setHelperEmailText("Perfect! Your email is valid.");
            setHelperEmailTextColor("text-success");
        }
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
        if(!validatePassword(e.target.value)){
            setHelperPasswordText("Your password must contain at least 8 characters, one uppercase letter, lowercase letter, and number.");
            setHelperPasswordTextColor("text-danger");
        } else {
            setHelperPasswordText("Your password is strong!");
            setHelperPasswordTextColor("text-success");
        }
    };

    const passwordAgainChange = (e) => {
        setPasswordAgain(e.target.value);
        if(!validatePasswordAgain(password, e.target.value)){
            setHelperPasswordAgainText("Your passwords do not match.");
            setHelperPasswordAgainTextColor("text-danger");
        } else {
            setHelperPasswordAgainText("Your passwords match!");
            setHelperPasswordAgainTextColor("text-success");
        }
    };
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    const validatePassword = (password) => passwordRegex.test(password);

    const validatePasswordAgain = (password, passwordAgain) => password === passwordAgain;
    
    const emailRegex = /\S+@\S+\.\S+/;
    
    const validateEmail = (email) => emailRegex.test(email);
    
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => { 

        e.preventDefault();
        
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isPasswordAgainValid = validatePasswordAgain(password, passwordAgain);

        if (!isEmailValid || !isPasswordValid || !isPasswordAgainValid) {
            const invalidInput = document.querySelector('.text-danger');
            if (invalidInput) {
                invalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        const dobDate = dob.substring(0,10);
        const formData = {
            email,
            password,
            username,
            firstName,
            lastName,
            phone,
            address,
            city,
            country,
            postalCode,
            dobDate
        };

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data === "success") {
                showAlertWithTimeout("You have successfully registered in!", "alert-success")
                navigate("/signin");
            } 
        } catch (error) {
            console.error("Error registering in:", error);
            showAlertWithTimeout("An error occurred. Please try again.", "alert-danger")
        }
    }
    return (
        <Card className="register">
            <Form className="shadow p-4 rounded register-form" onSubmit={handleSubmit}>
                <h1 className="h4 mb-2 text-center">Register</h1>
                <p>We are collecting your details now, to simplify your booking later!</p>
                <p>You can update your information in your profile page at anytime.</p>
                <p>
                    If you have already created an account, then please <Button
                    className="text-muted px-0"
                    variant="link"
                    as={Link}
                    to={"/signin"}
                    > Sign In. </Button>
                </p>
                <FormInput 
                    label={"Email"} 
                    type={"email"} 
                    placeholder={"Email Address"} 
                    value={email}
                    onChange={handleEmailChange}
                    helperText={helperEmailText}
                    helperTextColor={helperEmailTextColor}
                    required/>
                <FormInput label={"Username"} type={"text"} placeholder={"Username"} onChange={(e) => setChange(e, setUsername)} required/>
                <FormInput label={"First-Name"} type={"text"} onChange={(e) => setChange(e, setFirstName)} required/>
                <FormInput label={"Last-Name"} type={"text"} onChange={(e) => setChange(e, setLastName)} required/>
                <FormInput label={"Phone"} type={"tel"} onChange={(e) => setChange(e, setPhone)} required/>
                <FormInput label={"Address"} type={"text"} onChange={(e) => setChange(e, setAddress)} required/>
                <FormInput label={"City"} type={"text"} onChange={(e) => setChange(e, setCity)} required/>
                <FormInput label={"Country"} type={"text"} onChange={(e) => setChange(e, setCountry)} required/>
                <FormInput label={"Postal-Code"} type={"text"} onChange={(e) => setChange(e, setPostalCode)} required/>
                <FormInput label={"Date of Birth"} type={"date"} onChange={(e) => setChange(e, setDob)} required/>
                <FormInput 
                    label={"Password"} 
                    type={"password"} 
                    placeholder={"Password"} 
                    value={password}
                    onChange={passwordChange}
                    helperText={helperPasswordText}
                    helperTextColor={helperPasswordTextColor}
                    required/>
                <FormInput 
                    label={"Password (again)"} 
                    type={"password"} 
                    placeholder={"Password (again)"} 
                    value={passwordAgain}
                    onChange={passwordAgainChange}
                    helperText={helperPasswordAgainText}
                    helperTextColor={helperPasswordAgainTextColor}
                    required/>
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