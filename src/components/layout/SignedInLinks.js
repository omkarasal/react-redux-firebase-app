import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/">Logout</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">OR</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;