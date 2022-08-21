import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import './style.css';

export default function Panel(){
    return(
     <div id="main_panel">
        <AiOutlineMenu style={{cursor: "pointer", marginLeft: "1.5rem"}} size={25}/>   
        <section className="content-panel">
        <FaUserCircle size={25}/>
            <p>Admin</p>
        </section>
     </div>   
    )
}
