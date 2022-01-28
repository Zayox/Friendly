import React from 'react';
import logo from '../img/FriendlyLogo.png';
import pfp from '../img/me.jfif';
import {Link} from 'react-router-dom';

const Navbar = () => {

    let cpt = 0;
    let profileMenu;
    let profileMenuSquare;

    var checkExist = setInterval(function() {
        if (('#profileMenu').length) {
            profileMenu = document.getElementById("profileMenu");
            profileMenuSquare = document.getElementById("profileMenuSquare");
            clearInterval(checkExist);
        }
    }, 100);

    function profileDisplayMenu(){
        cpt++;
        if(cpt%2===0){
            profileMenu.style.display = "none";
            profileMenuSquare.style.display = "none";
        }
        else{
            profileMenu.style.display = "block";
            profileMenuSquare.style.display = "block";
        }
    }


    return (
        <div className="flex justify-center mt-4">
            <img src={logo} alt="FriendlyLogo" className="h-12"/>
            <ul className="flex ml-8 mt-3">
                <Link to="/"><li className="ml-8 hover:text-red-500 text-lg">Home</li></Link>
                <a href="null"><li className="ml-8 hover:text-red-500 text-lg">Marketplace</li></a>
                <a href="null"><li className="ml-8 hover:text-red-500 text-lg">Profile</li></a>
                <Link to='/create'><li className="ml-8 hover:text-red-500 text-lg">Create</li></Link>
                <img src={pfp} alt="PfpLogo" className="h-12 ml-8 mt-[-5px] rounded-3xl cursor-pointer hover:opacity-80" onClick={() => profileDisplayMenu()}/>
            </ul>
            <div className="absolute mt-16 h-[1px] w-[570px] ml-[-60px] bg-[#e9e8e8]"></div>
            <div className="h-8 w-8 bg-red-400 rotate-[45deg] mt-16 ml-[-40px] hidden" id="profileMenuSquare"></div>
            <div className="w-32 p-2 bg-red-400 mt-20 ml-[-70px] rounded hidden" id="profileMenu">
                <ul>
                    <li className="text-white cursor-pointer">Profile</li>
                    <li className="text-white cursor-pointer">Settings</li>
                    <li className="text-white cursor-pointer">Disconnect</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;