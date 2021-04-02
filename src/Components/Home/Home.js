import React, { useEffect, useState } from 'react';

const Home = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data))
    }, [])

    return (
        <div>
            {laptops.length}
        </div>
    );
};

export default Home;