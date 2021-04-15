import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";

function Register() {
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
                <label htmlFor="email-field">
                   Email:
                    <input
                        type="text"
                        name="email"
                        id="email-field"
                        {...register("email")}
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
export default Register
