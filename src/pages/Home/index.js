import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.scss';

function Home () {
    const navigate = useNavigate();

    const go = () => {
        navigate('/goods');
        // navigate('/', { replact: true });
    }

    return (
        <div className={styles.app}>
                Home
                <button onClick={go}>to goods</button>
        </div>
    )
}

export default Home;