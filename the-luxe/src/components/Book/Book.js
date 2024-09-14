import React from 'react';
import { Form, Card, Row} from "react-bootstrap";
import TransparentButton from "../Buttons/TransparentButton"
import "./Book.css"
import FormInput from '../Form/Input';
import { useEffect } from 'react';

const Book = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
     
    }
    return (
        <div className='booking'>
            <Card className="signin">
                <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit} >
                    <h1 className="h4 mb-2 text-center">Book Your Stay</h1>
                    
                    <FormInput 
                        label={"Check-in"} 
                        type={"date"}  
                        required
                    />
                   <FormInput 
                        label={"Check-out"} 
                        type={"date"} 
                        required
                    />
                    <Form.Group className="mb-2" controlId="Room-Type">
                        <Form.Label>Room Category</Form.Label>
                        <Form.Select aria-label="Room-Type">
                            <option>--------</option>
                            <option value="1">STANDARD || Bed: DOUBLE - Guests: 4 || Price: €120</option>
                            <option value="2">DELUXE || Bed: QUEEN - Guests: 2 || Price: €150</option>
                            <option value="3">SUITE ||Bed: KING - Guests: 4 || Price: €200</option>
                        </Form.Select>
                    </Form.Group>
                    <FormInput 
                        label={"Guests"} 
                        type={"number"} 
                        required    />
                    <Row className="d-flex justify-content-center">
                        <TransparentButton type="submit" style={{
                            "margin":"1rem",
                            "backgroundColor": "#455d58"
                            }}>
                            Book
                        </TransparentButton>
                    </Row>
                </Form>
            </Card>
        </div>
  );
};



export default Book;