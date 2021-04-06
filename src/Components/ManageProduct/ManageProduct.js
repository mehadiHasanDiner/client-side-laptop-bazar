import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Loading from '../../Components/images/tenor.gif'



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
        alert('Product of Laptop Deleted')
        window.location.reload(true);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteLaptop/${id}`, {
            method: 'DELETE'
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({ id }),
        })
            .then(res => res.json())
            .then(data => {
                deleteLaptop()

                if (data) {
                }
            })
    }

    return (
        <Container className="mt-3">
            {
                laptops.length === 0 && <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}> <img style={{ width: '150px' }} src={Loading} alt="" />
                </div>
            }
            <Row>
                <Col sm={3} className='side-bar'>
                    <h3>Laptop Bazar</h3>                    
                    <Link style={{ color: 'white' }} to="/addProduct">  <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPlus} /></span> Add Product </li> </Link>                    
                    <Link style={{ color: 'white' }} to="/manageProduct">  <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faGripHorizontal} /></span> Manage Product </li>  </Link>
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

                        <tbody>

                            {
                                laptops.map(laptop =>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{laptop.productName}</td>
                                        <td>{laptop.brand}</td>
                                        <td>{laptop.price}</td>
                                        <td> <span style={{ backgroundColor: '#0cad24', color: 'white', padding: "3px", borderRadius: '3px' }}><FontAwesomeIcon icon={faPencilAlt} /></span>  <span onClick={() => handleDelete(laptop._id)} style={{ backgroundColor: 'red', color: 'white', padding: "3px", borderRadius: '3px' }}><FontAwesomeIcon icon={faTrashAlt} /></span> </td>
                                    </tr>
                                )}
                        </tbody>

                    </Table>
                </Col>
            </Row>
        </Container>

    );
};

export default ManageProduct;