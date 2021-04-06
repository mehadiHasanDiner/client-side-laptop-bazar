import React from 'react';
import { useParams } from 'react-router';


const CheckOut = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>this is checkout</h1>
        </div>
    );
};

export default CheckOut;