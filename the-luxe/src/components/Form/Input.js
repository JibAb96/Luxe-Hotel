import React from "react";
import { Form } from "react-bootstrap";

const FormInput = React.forwardRef(
  (
    { label, type, placeholder, value, onChange, helperText, helperTextColor },
    ref,
  ) => {
    return (
      <Form.Group className="mb-2" controlId={label}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          required
        />
        {helperText && (
          <Form.Text className={`textmuted ${helperTextColor}`}>
            {helperText}
          </Form.Text>
        )}
      </Form.Group>
    );
  },
);

export default FormInput;
