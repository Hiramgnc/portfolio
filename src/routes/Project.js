import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import MyLanguages from "../components/MyLanguages";
import Work from "../components/Work";

const Project = () => {
    return (
        <div>
            <NavBar/>
            <HeroImg2 heading="POYECTOS" text="Mis trabajos mas recientes" />
            <Work/>
            <MyLanguages/>
            <Footer/>
        </div>
    )
}

export default Project