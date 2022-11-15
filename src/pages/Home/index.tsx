import React, { useState } from 'react';
import styles from './index.scss'

function Home(props: any): JSX.Element {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.box}>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
}

export default Home;