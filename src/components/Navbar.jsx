import React from 'react';
import "../App.css";
import logo from '../img/FriendlyLogo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="FriendlyLogo" className="friendly-logo"/>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <li>Marketplace</li>
                <li>Profile</li>
                <Link to="/create">
                    <li>Create</li>
                </Link>

            </ul>
        </div>
    );
};

export default Navbar;