import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";

import "./HeroImgStyles.css";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intoImg" src={ IntroImg } alt="IntroImg" />
            </div>

            <div className="content">
                <p>Hola soy Hiram</p>
                <h1>Full stack developer</h1>

                <Link to="/project" className="btn">
                    Proyectos
                </Link>

                <Link to="/contact" className="btn btn-ligth">
                    Contacto
                </Link>
            </div>

        </div>
    )
}

export default HeroImg