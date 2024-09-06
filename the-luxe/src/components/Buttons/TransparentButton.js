import React from "react"
import {Button} from "react-bootstrap"
import "./TransparentButton.css"

const TransparentButton = ({ children, ...rest }) => {    
    return (
        <Button className="button" {...rest}>
            {children}
        </Button>
    );
};

export default TransparentButton