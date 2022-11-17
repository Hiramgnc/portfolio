import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="left">

                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>La Banda, Santiago del Estero.</p>
                            <p>Argentina.</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +54 385 4722894
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            hiramgnc@hotmail.com
                        </h4>
                    </div>
                </div>

                <div className="rigth">
                    <h4>Sobre mi</h4>
                    <p>
                        Soy egresado de Henry full stack developer
                        Soy egresado de Henry full stack developer.
                    </p>

                    <div className="social">
                        <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer