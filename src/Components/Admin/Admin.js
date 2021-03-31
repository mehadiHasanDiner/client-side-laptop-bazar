import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
// import { Button } from 'bootstrap';

const Admin = () => {
    const onSubmit = (e, data) => {
        console.log(data)
        e.preventDefault()
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2e640cfdaa455b72b248d5c6691a6ff3');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
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
                        <Form.File onChange={handleImageUpload} className = "p-1"  id="exampleFormControlFile1"/>
                    </Form.Group>
                </Form.Row>
                <Button onSubmit = {onSubmit}  variant="primary" type="submit">Save Product  </Button>
            </Form>
        </Container>
    );
};

export default Admin;