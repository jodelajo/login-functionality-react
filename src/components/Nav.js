import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return <>
    <nav>
        <ul className="navbar">
            <li>
                <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
            </li>
            <li>
                <NavLink to="/register" activeClassName="active-link">Register</NavLink>
            </li>
            <li>
                <NavLink to="/log-in" activeClassName="active-link">Log in</NavLink>
            </li>
            <li>
                <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
            </li>
        </ul>
    </nav>

    </>
}
export default Nav