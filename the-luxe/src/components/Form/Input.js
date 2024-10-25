import React from "react";
import { Form } from "react-bootstrap";

const FormInput = React.forwardRef(
  (
    { label, type, placeholder, value, onChange, helperText, helperTextColor, rightElement, name },
    ref,
  ) => {
    return (
      <Form.Group className="mb-2" controlId={label}>
        <Form.Label>{label}</Form.Label>
        <div className="input-group">
          <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
            name={name}
            required
          />
          {rightElement}
        </div>
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
