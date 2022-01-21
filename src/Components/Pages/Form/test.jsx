export const Form = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleForm = form => {
        setName(form.name.value);
        setEmail(form.email.value);
    }

    return (
        <>
        <div>
            <div>
                <form>
                    <div>
                        <label htmlFor="name">Navn</label>
                        <input type="text" name='name' id='name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' />
                    </div>
                    <div>
                        <button type='button' onClick={event => handleForm(event.target.form)}>Send</button>
                        <button type='reset'>Nulstil</button>
                    </div>
                </form>
            </div>
            <div>
                <ul>
                    <li>Fulde navn: {name}</li>
                    <li>Email:{email}</li>
                </ul>
            </div>
        </div>
        </>
    )
}