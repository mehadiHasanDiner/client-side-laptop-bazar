import React, {  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import '../ManageProduct/ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, Route } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';



const Admin = () => {
    return (
        <Container className = "mt-3">

        <Row>
            <Col sm={3} className='side-bar'>
                <h3>Laptop Bazar</h3>
                <Route path="/addProduct"><AddProduct></AddProduct></Route>
                <Link style={{color:'white'}} to ="/addProduct">  <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPlus} /></span> Add Product </li> </Link> 
                <Route path="/manageProduct"><ManageProduct></ManageProduct></Route>
                <Link style={{color:'white'}} to ="/manageProduct">  <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faGripHorizontal} /></span> Manage Product </li>  </Link>
                <li> <span style={{ color: 'white', padding: "5px" }}><FontAwesomeIcon icon={faPencilAlt} /></span> Edit Product</li>
            </Col>


            <Col sm={9}>
                
            </Col>
        </Row>
    </Container>
    );
};

export default Admin;