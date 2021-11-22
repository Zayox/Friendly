import React from 'react';
import "../App.css";
import logo from '../img/FriendlyLogo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="FriendlyLogo" className="friendly-logo"/>
            <ul>
                <li>Home</li>
                <li>Marketplace</li>
                <li>Profile</li>
                <li>Create</li>
            </ul>
        </div>
    );
};

export default Navbar;