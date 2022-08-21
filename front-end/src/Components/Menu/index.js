import React from "react";
import Logo from '../../Imgs/logo.svg';
import { FiHome } from 'react-icons/fi';
import './style.css';


export default function Menu(){
    return(
     <div id="main_menu">
        <img className="logo" src={Logo} alt="Logo GBM" />
        <section className="content-menu">
            <p>Principal</p>
            <div className="home-menu">
                <FiHome size={25}/> 
                <p>Home</p>
            </div>
        </section>
     </div>
    )
}

