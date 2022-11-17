import React, { useState }from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import LogoHiram from "../assets/Logo-Hiram.png";

import "./NavbarStyles.css";


const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={ color ? "header headerBg" : "header"}>
            <Link to="/">
                <h1>Hiram Gerez</h1>
                {/* <img className="logoHiram" src={ LogoHiram } alt="LogoHiram" /> */}
            </Link>

            <ul className={ click ? "navMenu active" : "navMenu" }>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/project">Proyectos</Link>
                </li>

                <li>
                    <Link to="/about">Sobre mi</Link>
                </li>

                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>

            <div className="hamburger" onClick={ handleClick }>
                { click ? (
                    <FaTimes size={20} style={{ color: "yellow" }} />) 
                    : (<FaBars size={20} style={{ color: "yellow" }} />)
                }
            </div>
        </div>
    )
}

export default NavBar