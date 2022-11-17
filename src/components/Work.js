import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData.js";

import "./WorkCardStyles.css";

const Work = () => {
    return (
        <div className="workContainer">
            <h1 className="projectHeading">Proyectos</h1>
            <div className="projectContainer">
                { WorkCardData.map((value, index) => {
                    return (
                        <WorkCard key={index} 
                        imgsrc={value.imgsrc} 
                        title={value.title} 
                        text={value.text}
                        view={value.view}
                        source={value.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work