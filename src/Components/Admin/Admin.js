import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Container, Button } from 'react-bootstrap';
// import { Button } from 'bootstrap';

const Admin = () => {
    return (
        <Container>
            <Form className = "p-3" style={{backgroundColor:'#e1e1e1'}}>
            <h3>Add Product</h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label><strong>Product Name</strong></Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label><strong>Brand Name</strong></Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label><strong>Add Price</strong></Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label><strong>Add Price</strong></Form.Label>
                        <Form.File className = "p-1"  id="exampleFormControlFile1"/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Save Product  </Button>
            </Form>
        </Container>
    );
};

export default Admin;