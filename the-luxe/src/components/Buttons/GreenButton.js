import React from "react";
import { Button } from "react-bootstrap";
import "./GreenButton.css";

const GreenButton = ({ children, type, className, ...rest }) => {
  return (
    <Button 
      className={`button ${className || ""}`} 
      {...rest} 
      type={type}
    >
      {children}
    </Button>
  );
};

export default GreenButton;
