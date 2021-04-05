import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptop.css'

const Laptop = (props) => {
    const {imageURL, brand, productName, price, key} =props.laptop
    return (
        <div className ="col" >
            <div className ="card-style" style={{margin: '10px' }}>
            <div className="img-fluid img-thumbnail"  variant="top">
              <img src={imageURL}  alt=""/>
            <div className="card-body">
              <h5 className="card-title">{brand}-{productName}</h5>
              <hr/>
            <div className="d-flex justify-content-between">
              <h4 style={{color:'#28a745'}}>Tk. {price}</h4>
              <button className="btn btn-success">Buy Now</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Laptop;