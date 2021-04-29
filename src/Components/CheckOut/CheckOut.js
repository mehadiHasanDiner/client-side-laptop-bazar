import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CheckOut = () => {

    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);

    const [laptop, setLaptop] = useState({});
    
    useEffect(() => {
        fetch(`https://sleepy-brook-42841.herokuapp.com/laptops/${id}`)
            .then(res => res.json())
            .then(data => setLaptop(data))
    }, [id])



    const [selectDate, setSelectDate] = useState({
        orderDate: new Date(),
    });

    const handleOrderDate = (date) => {
        const newDate = { ...selectDate }
        newDate.orderDate = date;
        setSelectDate(newDate);
    };

    const handleBuy = () => {
        const newLaptopInfo = {
            email: loggedInUser.email,
            displayName: loggedInUser.name,
            photoURL: loggedInUser.photo,
            date: selectDate.orderDate,
            id: laptop._id,
            price: laptop.price,
            name: laptop.name,
            brand: laptop.brand,
            imageURL: laptop.imageURL
        }
        // console.log(newLaptopInfo);

        fetch('https://sleepy-brook-42841.herokuapp.com/addLaptop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLaptopInfo)
        })
            .then(res => res.json())

            .then(data => {
                if (data) {
                    alert('Laptop added to cart')
                }
            })
    }

    let i = 1;
    if (laptop.length > 0) {
        i++;
    }

    return (
        <div className="container">
            <h3 style={{ textAlign: 'center', color: '#7282f5', marginTop: '10px', marginBottom: '20px' }}>Check Out Section </h3>
            <h4 style={{ textAlign: 'center' }}>Hello, {(loggedInUser.name.toUpperCase())} ! Let's buy your selected laptop</h4>

            <div style={{ textAlign: 'center' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Order Date"
                            value={selectDate.orderDate}
                            onChange={handleOrderDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>

                <Table striped bordered hover style={{ textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th> SL </th>
                            <th>Product Name</th>
                            <th>Product Brand</th>
                            <th>Product Price</th>
                            <th> Product Image </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{i++}</td>
                            <td>{productName}</td>
                            <td>{brand}</td>
                            <td>{price}</td>
                            <td> <img style={{width:'100px', height:'75px'}} src={imageURL} alt="" /> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{ float: 'right' }} >

                <button onClick={handleBuy} className="btn btn-primary">Add to Cart</button>

                <Link to="/" className="m-3">
                    <button className="btn btn-info">Shop More</button>
                </Link>

                <Link to="/orderPreviewPass">
                    <button className="btn btn-success">Preview Order</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOut;