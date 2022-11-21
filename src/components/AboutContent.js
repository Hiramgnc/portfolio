import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import "./AboutContentStyles.css";


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Quién soy?</h1>
                <p>Me defino como una persona emprendedora, comunicativa, 
                    positiva, segura de que estamos rodeados de alternativas y oportunidades.
                    Tengo como objetivo sumarme a un equipo de desarrollo en el cual aprender y crecer,
                    participando de un proyecto en el cual pueda aportar valor, enfrentar nuevos desafíos y experiencias.       
                </p>
                <Link to="/contact">
                    <button className="btn">Contacto</button>
                </Link>
            </div>

            <div className="right">
                <div className="imgContainer">
                    <div className="imgStack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>

                    <div className="imgStack bottom">
                        <img src={React2} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
