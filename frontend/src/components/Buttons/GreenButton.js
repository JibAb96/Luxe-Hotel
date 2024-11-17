import React from "react";
import { Button } from "react-bootstrap";
import styles from "./GreenButton.module.css"

const GreenButton = ({ children, type, ariaLabel = "button", disabled, className, ...rest }) => {
  return (
    <Button 
      className={`${styles.buttons} ${className || ""}`} 
      {...rest} 
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
};

export default GreenButton;
