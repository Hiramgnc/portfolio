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
                <p>Soy un desarrollador full stack egresado del bootcamp Henry,
                    que esta dando sus primeros pasos en mundo it
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