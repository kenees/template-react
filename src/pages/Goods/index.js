import React from 'react';
import { useNavigate } from 'react-router-dom';

function Goods () {
    const navigate = useNavigate();

    const go = () => {
        navigate('/');
        // navigate('/', { replact: true });
    }

    return (
        <div>
                Goods
                <button onClick={go}>to home</button>
        </div>
    )
}

export default Goods;