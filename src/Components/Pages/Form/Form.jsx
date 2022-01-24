import { useState } from 'react'
import styles from './Form.module.scss'

export const Form = () => {
    //Hooks (skal stå over øverst)
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ comment, setComment ] = useState('');
    const [ methodContat, setMethod ] = useState('');


    const formHandle = form => {
        setName(form.name.value);
        setPhone(form.phone.value);
        setEmail(form.email.value);
        setComment(form.comment.value);
        setMethod(form.methodContat.value);

    }
    return (
        <div className={styles.wrapper}>
            <form>
                <label htmlFor='name'>Fulde navn:</label>
                <input type="text" name='name' id='name'/>
                <label htmlFor='phone'>Telefonnummer:</label>
                <input type="number" name='phone' id='phone'/>
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' id='email' />
                <label htmlFor='comment'>Kommentar:</label>   
                <textarea id='comment' name='comment'></textarea>
                    <div className={styles.method}>
                        <h4>Kontaktmetode</h4>
                        <label htmlFor="methedPhone">Telefon:</label>
                        <input type="radio" name='methodContat' value='Telefon' ></input>
                        <label htmlFor="methedEmail">Email:</label> 
                        <input type="radio" name='methodContat' value='Email'/>
                    </div>
                <button type='button' onClick={event => formHandle(event.target.form)}>Send</button>
                <button type='reset'>Nulstil</button>
            </form>
            <div className={styles.divWrapper}>
                <h2>Send formular med:</h2>
                <p>Fulde navn: {name}</p>
                <p>Telefonnummer: {phone}</p>
                <p>Email: {email}</p>
                <p>Kommentar: {comment}</p>
                <p>Kontaktmedtode: {methodContat}</p>
            </div>
        </div>
    )
}
