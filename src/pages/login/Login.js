import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";

function Login() {
    const { handleSubmit, register } = useForm();

    const onSubmit = data => console.log(data);

    return (<form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="wrapper">
                <legend>Login</legend>
                <label htmlFor="username-field">
                    Username:
                    <input
                        type="text"
                        name="username"
                        id="username-field"
                        {...register("username")}
                        />
                </label>
                <label htmlFor="password-field">
                    Password:
                    <input
                        type="text"
                        name="password"
                        id="password-field"
                        {...register("password")}
                    />
                </label>
                <button type="submit">Send</button>
            </fieldset>
        </form>
    );
}
export default Login
