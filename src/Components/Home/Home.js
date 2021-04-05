import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Laptop from '../Laptop/Laptop';
import Loading from '../../Components/images/tenor.gif'



const Home = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/laptops')
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
                laptops.map(laptop => <Laptop laptop={laptop} key={laptop._id}></Laptop>)
            }
        </div>
    );
};

export default Home;