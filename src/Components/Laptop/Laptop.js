import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptop.css'
import { useHistory } from 'react-router';

const Laptop = ({laptop}) => {
    // const {imageURL, brand, productName, price, key} =props.laptop;
    const history = useHistory()
    const handleBuyNow = (_id) => {
      history.push(`/checkOut/${_id}`)
    }
    return (
        <div className ="col" >
            <div className ="card-style" style={{margin: '10px' }}>
            <div className="img-fluid img-thumbnail"  variant="top">
              <img src={laptop.imageURL}  alt=""/>
            <div className="card-body">
              <h5 className="card-title">{laptop.brand}-{laptop.productName}</h5>
              <hr/>
            <div className="d-flex justify-content-between">
              <h4 style={{color:'#28a745'}}>Tk. {laptop.price}</h4>
              <button onClick={() =>handleBuyNow(laptop._id)} className="btn btn-success">Buy Now</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Laptop;