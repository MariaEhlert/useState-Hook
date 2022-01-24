import { useState } from 'react'
import styles from './Counting.module.scss'

export const Counting = () => {
    //Hooks (skal stå over øverst)
    const [ count, setCount] = useState(0);
    return (
        <div className={styles.wrapper}>
            <h2>Byg en tæller med useState</h2>
            <p>Du har klikket på knappen {count} antal gange</p>
            <button onClick={() => setCount(count + 1)}>Klik på mig!</button>
        </div>
    )
}