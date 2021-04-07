import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const orderPreview = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orderPreview?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [loggedInUser.email])

    let i = 0;
    if (order.length > 0) {
        i++;
    }

    return (
        <Container>
            <Col style={{ display: 'grid', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <h3>You have {order.length} Laptop in your Cart</h3>
            <Link to="/thank" style={{ textAlign: 'center', color: '#7282f5', marginTop: '10px', marginBottom: '20px' }}>
                    <button className="btn btn-success">CheckOut</button>
                </Link>
                <Link to="/" style={{ float: 'right', marginRight: '50px', marginBottom: '25px' }}>
                    <button className="btn btn-info">Shop More</button>
                </Link>

                <Table striped bordered hover style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th> SL </th>
                                <th>Product Image</th>
                                <th>Product Brand</th>
                                <th>Product Price</th>
                                <th> Action </th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                order.map(orderPass =>
                                    <tr>
                                        <td>{i++}</td>
                                        <td><img style={{width:'100px', height:'75px'}} src={imageURL} alt="" /></td>
                                        <td>{orderPass.brand}</td>
                                        <td>{orderPass.price}</td>
                                        <td> {(new Date(orderPass.date).toDateString("dd/MM/yyyy"))} </td>
                                    </tr>
                                )}
                        </tbody>

                    </Table>

            </Col>
        </Container>
    );
};

export default orderPreview;