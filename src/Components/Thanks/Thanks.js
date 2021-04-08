import React from 'react';
import thanksPic from '../../Components/images/giphy.gif'

const Thanks = () => {
    return (
        <div>
            <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <img src={thanksPic} alt=""/>
            </div>
            
        </div>
    );
};

export default Thanks;