import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const OrderPrevieWPass = () => {
    const [orderPass, setOrderPass] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);

    useEffect(() => {
        fetch('https://sleepy-brook-42841.herokuapp.com/orderPreviewPass?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderPass(data))
    }, [loggedInUser.email])

    let i = 0;
    if (orderPass.length > 0) {
        i++;
    }

    return (
        <Container>
            <Col style={{ display: 'grid', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <h3>You have {orderPass.length} Laptop in your Cart</h3>
            <div style ={{display:'inline-flex', marginTop: '20px'}}>
            <Link to="/" style={{ marginRight: '20px', marginBottom: '20px' }}>
                    <button className="btn btn-info">Shop More</button>
                </Link>
            <Link to="/thanks" style={{  color: '#7282f5', marginBottom: '20px' }}>
                    <button className="btn btn-success">CheckOut</button>
                </Link>
                
                </div>
                <Table striped bordered hover style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th> SL </th>
                                <th> Customer Name </th>
                                <th> Product ID  </th>
                                <th>Product Image</th>
                                <th>Product Brand</th>
                                <th>Product Price</th>
                                <th> Product Purchase Date </th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                orderPass.map(order =>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{order.displayName}</td>
                                        <td>{(order.id).slice(21,24)}</td>
                                        <td><img style={{width:'100px', height:'75px'}} src={order.imageURL} alt="" /></td>
                                        <td>{order.brand}</td>
                                        <td>{order.price}</td>
                                        <td> {(new Date(order.date).toDateString("dd/MM/yyyy"))} </td>
                                    </tr>
                                )}
                        </tbody>

                    </Table>

            </Col>
        </Container>
    );
};

export default OrderPrevieWPass;