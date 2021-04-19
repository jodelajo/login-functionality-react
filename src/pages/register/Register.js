import React, { useState} from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import {useHistory, Link } from 'react-router-dom';
import axios from "axios";


// 1. installeer axios
// 2. importeer axios
// 3. asynchrone functie
// 4. try / catch blok
// --- error state en loading state aanmaken en communiceren aan gebruiker
// 5. in try: post request maken naar endpoint:  http://localhost:3000/register
// 6. axios post request krijgt de url en het data object mee (deze moet in dit geval minimaal email en password bevatten)
// 7. Succesmelding tonen aan de gebruiker (stukje state voor maken!)
// 8. Gebruiker doorsturen naar inlog-formulier

function Register() {
    const [succesMessage, setSuccesMessage] = useState(false)
    const [loading, toggleLoading] = useState(false)
    const { handleSubmit, register } = useForm();
    const history = useHistory()

    // const onSubmit = data => console.log(data);
    async function onSubmit(data) {
        console.log(data);
        toggleLoading(false)
        try {
            const result = await axios.post('http://localhost:3000/register', {
                email: data.email,
                password: data.password,
                username: data.username,
            });
            console.log(result)

            toggleLoading(true)

        } catch (e) {
            console.error(e)
        }

        setSuccesMessage(true)
        setTimeout(()=>{history.push('/log-in')},2000)

    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="wrapper">
                <legend>Register</legend>
                <label htmlFor="username-field" className="label">
                    Username:
                    <input
                        type="text"
                        name="username"
                        id="username-field"
                        {...register("username")}
                        className="input"
                    />
                </label>
                <label htmlFor="email-field" className="label">
                   Email:
                    <input
                        type="text"
                        name="email"
                        id="email-field"
                        {...register("email")}
                        className="input"
                    />
                </label>
                <label htmlFor="password-field" className="label">
                    Password:
                    <input
                        type="text"
                        name="password"
                        id="password-field"
                        {...register("password")}
                        className="input"
                    />
                </label>
                <button type="submit" className="button">Send</button>
                <p className="inlog">Ben je al geregistreerd? Ga dan direct naar de <Link to='/log-in'>inlogpagina</Link></p>
                {succesMessage && <p>Je bent geregistreerd en wordt doorgestuurd naar de inlog-pagina</p>}
            </fieldset>
        </form>
    );
}
export default Register
