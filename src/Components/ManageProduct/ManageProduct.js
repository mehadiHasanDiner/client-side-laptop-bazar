import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ManageProduct = () => {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/laptops')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    let i = 0;
    if (laptops.length > 0) {
        i++;
    }

    const deleteLaptop = () => {
        fetch(`http://localhost:5000/laptops`)
            .then(res => res.json())
            .then(data => setLaptops(data))
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteLaptop/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    deleteLaptop();
                    alert('Product of Laptop is Deleted')
                }
            })
    }

    return (
        <Container>
            <Row>
                <Col sm={3} className='side-bar'>
                    <h3>Laptop Bazar</h3>
                    <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faGripHorizontal} /></span> Manage Product</li>
                    <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPlus} /></span> Add Product</li>
                    <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPencilAlt} /></span> Edit Product</li>
                </Col>
                <Col sm={9}>
                    <Table striped bordered hover style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th> SL </th>
                                <th>Product Name</th>
                                <th>Product Brand</th>
                                <th>Product Price</th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        {
                            laptops.map(laptop =>
                                <tbody>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{laptop.productName}</td>
                                        <td>{laptop.brand}</td>
                                        <td>{laptop.price}</td>
                                        <td> <span style={{ backgroundColor: '#0cad24', color: 'white', padding: "3px", borderRadius: '3px' }}><FontAwesomeIcon icon={faPencilAlt} /></span>  <span onClick={() => handleDelete(laptop._id)} style={{ backgroundColor: 'red', color: 'white', padding: "3px", borderRadius: '3px' }}><FontAwesomeIcon icon={faTrashAlt} /></span> </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </Table>
                </Col>
            </Row>
        </Container>

    );
};

export default ManageProduct;