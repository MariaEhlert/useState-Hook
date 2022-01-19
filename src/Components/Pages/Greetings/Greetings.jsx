import { useState } from "react"
import styles from './Greetings.module.scss'

export const Greetings = () => {
    //Hook (skal stå over øverst)
    const [ name, setName ] = useState('Maria');

    return (
        <div className={styles.wrapper}>
            <h2>Send en hilsen</h2>
            <p>Hej med dig {name}</p>
            <p>Jeg håber du får en god dag</p>
            <input type="text" placeholder="Skriv et andet navn!" onInput={event => setName(event.target.value)} />
        </div>
    )
}