import React from "react";
import { Button } from "react-bootstrap";
import "./TransparentButton.css";

const TransparentButton = ({ children, type, ...rest }) => {
  return (
    <Button className="button" {...rest} type={type}>
      {children}
    </Button>
  );
};

export default TransparentButton;
