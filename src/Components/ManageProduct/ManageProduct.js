import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './ManageProduct.css';


const ManageProduct = () => {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/laptops')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    return (
        <Container>
            <Row>
                <Col sm={2} style={{backgroundColor:'purple', maxHeight: '100%', padding:'10px'}}>
                    <li>Add Product</li>
                </Col>
                <Col sm={10}>
                    <div className ="table-heading">
                        <ul>
                        <li>Product Name </li>
                        <li>Product Brand </li>
                        <li>Product Price </li>
                        <li>Action </li>
                        </ul>
                    </div>
                {
                    laptops.map(laptop =>
                        <div className ="table-row">
                        <ul>
                            <li> {laptop.productName}</li>
                            <li> {laptop.brand}</li>
                            <li> {laptop.price}</li>
                            <li> <button>Edit</button> <button>Delete</button> </li>
                        </ul>
                        </div>
                    )
                }
                </Col>
                

            </Row>
        </Container>

    );
};

export default ManageProduct;