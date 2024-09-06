import React from "react"
import {Button} from "react-bootstrap"
import "./GreenButton.css"

const GreenButton = ({ children, ...rest }) => {    
    return (
        <Button className="button" {...rest}>
            {children}
        </Button>
    );
};

export default GreenButton