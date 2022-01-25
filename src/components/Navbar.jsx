import React from 'react';
import logo from '../img/FriendlyLogo.png';

const Navbar = () => {
    return (
        <div className="flex justify-center mt-4">
            <img src={logo} alt="FriendlyLogo" className="h-12"/>
            <ul className="flex ml-8 mt-3">
                <a href="null"><li className="ml-8 hover:text-red-500 text-lg">Home</li></a>
                <a href="null"><li className="ml-8 hover:text-red-500 text-lg">Marketplace</li></a>
                <a href="null"><li className="ml-8 hover:text-red-500 text-lg">Profile</li></a>
                <a href="null"><li className="ml-8 hover:text-red-500 text-lg">Create</li></a>
            </ul>
            <div className="absolute mt-16 h-[1px] w-[600px] bg-[#e9e8e8]"></div>
        </div>
    );
};

export default Navbar;