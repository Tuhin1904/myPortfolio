import "./Navbarstyles.css";
import {FaBars,FaWindowClose} from 'react-icons/fa';
import React from 'react'
import {Link} from "react-router-dom"
import { useState } from "react";
// import { click } from "@testing-library/user-event/dist/click";

function Navbar() {
    const[ham,setHam]=useState(false)
    const handleClick = () =>{
        setHam(!ham);
    }
  return (
    <>
    <div className="header">
        <Link to="/"><h1>Portfolio</h1></Link>
        <ul className={ham? "navbar-menu.active":"navbar-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
        
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {ham?(<FaWindowClose size={20} style={{color:'#ffffcc'}}/>):
            (<FaBars size={20} style={{color:'#ffffcc'}}/>)
            }
            
            
        </div>
        
    </div>
    </>
  )
}

export default Navbar