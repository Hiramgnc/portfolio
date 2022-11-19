import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
    return (
        <div>
            <NavBar/>
            <HeroImg2 heading="SOBRE MI" text="
                Soy una persona con constante actitud positiva, autodidacta y sociable.
                Manejo tecnologías como HTML, CSS, JavaScrip React, Redux, Node Js, Express, SQL y estoy aprendiendo MongoDb. 
            "/>
            <AboutContent/>
            <Footer/>
        </div>
    )
}

export default About