import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return <>
    <nav>
        <ul className="navbar">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to="/log-in">Log in</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
        </ul>
    </nav>

    </>
}
export default Nav