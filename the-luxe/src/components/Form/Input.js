import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({ label, type, placeholder, value, onChange, helperText, helperTextColor }) => {
    return (
        <Form.Group className="mb-2" controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
            {helperText && <Form.Text className={`textmuted ${helperTextColor}`}>{helperText}</Form.Text>}
        </Form.Group>
    )
}

export default FormInput