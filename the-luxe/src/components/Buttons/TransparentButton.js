import React from "react";
import { Button } from "react-bootstrap";
import "./TransparentButton.css";

const TransparentButton = ({ children, type, className, ...rest }) => {
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

export default TransparentButton;
