import React from 'react';

import "./WorkCardStyles.css";

const WorkCard = (props) => {
    return (
        <div className="projectCard">
            <img src={ props.imgsrc } alt="imagen"/>
            <h2 className="projectTitle">
                {props.title}
            </h2>
            <div className="proDetails">
                <p>{props.text}</p>
                <div className="proBtns">
                    <a href={props.view} target="blank" className="btn">
                        Ver web
                    </a>
                    <a href={props.source} target="blank" className="btn">
                        Ver codigo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard