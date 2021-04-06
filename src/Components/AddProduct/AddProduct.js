import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Container, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../ManageProduct/ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, Route } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const productData = {
            productName: data.name,
            brand: data.brand,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    }
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2e640cfdaa455b72b248d5c6691a6ff3');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <Container className="mt-3">

            <Row>
                <Col sm={3} className='side-bar'>
                    <h3>Laptop Bazar</h3>                    
                    <Link style={{ color: 'white' }} to="/addProduct">  <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPlus} /></span> Add Product </li> </Link>                    
                    <Link style={{ color: 'white' }} to="/manageProduct">  <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faGripHorizontal} /></span> Manage Product </li>  </Link>
                    <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPencilAlt} /></span> Edit Product</li>
                </Col>


                <Col sm={9}>
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3" style={{ backgroundColor: '#e1e1e1' }}>
                        <h3>Add Product</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label><strong>Product Name</strong></Form.Label>
                                <Form.Control type="text" name="name" defaultValue="Product Name" ref={register} placeholder="Enter Product Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label><strong>Brand Name</strong></Form.Label>
                                <Form.Control type="text" name="brand" defaultValue="Brand Name" ref={register} placeholder="Enter Brand" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label><strong>Add Price</strong></Form.Label>
                                <Form.Control type="number" name="price" defaultValue="Product Price" ref={register} placeholder="Enter Price" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label><strong>Add Price</strong></Form.Label>
                                <Form.File name="exampleRequired" onChange={handleImageUpload} className="p-1" id="exampleFormControlFile1" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">Save Product  </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;