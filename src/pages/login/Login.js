import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";

function Login() {
    const { handleSubmit, register } = useForm();

    const onSubmit = data => console.log(data);

    return (<form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="wrapper">
                <legend>Login</legend>
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
            </fieldset>
        </form>
    );
}
export default Login
