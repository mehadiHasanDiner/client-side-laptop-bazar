import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Laptop from '../Laptop/Laptop';
import Loading from '../../Components/images/tenor.gif'



const Home = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-brook-42841.herokuapp.com/laptops')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    return (
        <div className="container">
            {
                laptops.length === 0 && <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}> <img style={{ width: '150px' }} src={Loading} alt="" />
                </div>
            }
            {
                laptops.map(laptop => <Laptop laptop={laptop}></Laptop>)
            }
        </div>
    );
};

export default Home;