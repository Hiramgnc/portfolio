import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "yellow", marginRight: "2rem" }} />
                        <div>
                            <p>La Banda, Santiago del Estero.</p>
                            <p>Argentina.</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "yellow", marginRight: "2rem" }} />
                            +54 385 4722894
                        </h4>
                    </div>

                    <div className="copyRight">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "yellow", marginRight: "2rem" }} />
                            hiramgnc@hotmail.com
                        </h4>
                    </div>

                </div>

                <div className="rigth">
                    <h3>Sobre mi</h3>
                    <p>
                        Soy una persona con constante actitud positiva, autodidacta y sociable. La constante busqueda de mi desarrollo, 
                        me llevo a encontrar nuevos retos en el mundo tech, formándome y encontrando pasión principalmente en 
                        tecnologías como React, Redux, JavaScript y Node Js. Aprendí estos conocimientos cursando la carrera de 
                        Full Stack Developer del bootcamp de Henry, donde complete dos grandes proyectos, uno individual y otro muy enriquecedor 
                        trabajando en equipo. Mi larga experiencia en el mundo comercial desarrollo mis habilidades blandas de trabajo de equipo, 
                        liderazgo, comunicación, resolución de problemas y orientación a resultados. Quiero conocer mas este mundo y estoy en 
                        constante formación pero me siento preparado para afrontar nuevos desafios.
                    </p>

                    <div className="social">
                        <a href="https://github.com/Hiramgnc" target="blank">
                            <FaGithub size={30} style={{ color: "yellow", marginRight: "1rem" }}/>
                        </a>
                        <a href="https://www.linkedin.com/in/hiram-gerez-b07171214/" target="blank">
                            <FaLinkedin size={30} style={{ color: "yellow", marginRight: "1rem" }} />
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
