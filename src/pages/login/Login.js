import React, {useContext} from 'react';
import './Login.css';
import { useForm, } from "react-hook-form";

import axios from 'axios';
import { AuthContext} from "../../components/context/AuthContext";
import {Link} from "react-router-dom";

// 1. importeer axios
// 2. async functie maken
// 3. try/catch blok
// 4. in de try: axios post request naar het eindpoint http://localhost:3000/login
// --- error state en loading state aanmaken en communiceren aan gebruiker
// 5. het post request bevat het endpoint en het data object met email en wachtwoord
// 6. wat we terugkrijgen is JWT token, die moet in de local storage
// 7. gebruiker doorsturen naar profielpagina
// 8. de gebruikersdata moet in de context geplaatst zodat alle componenten erbij kunnen!

function Login() {
    const { login } = useContext(AuthContext)
    const { handleSubmit, register } = useForm();




    // const onSubmit = data => console.log(data);
    async function onSubmit(data) {
        // console.log(data);
        try {
            const result = await axios.post('http://localhost:3000/login', data)

            login(result.data.accessToken)

        } catch (e) {
            console.error(e)
        }

    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="wrapper">
                <legend>Login</legend>
                <label htmlFor="username-field" className="label">
                    E-mailadres:
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
                <p className="inlog">Nog geen account? Ga dan direct naar de <Link to='/register'>registreer pagina</Link></p>

            </fieldset>
        </form>
    );
}
export default Login
