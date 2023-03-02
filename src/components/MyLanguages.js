import React from 'react';

import "./MyLanguagesStyles.css";


const MyLanguages = () => {
    return (
        <div className="languaje">
            <div className="cardContainer">
                <div className="card">
                    <h3>- Front End -</h3>
                    <span className="bar"></span>
                    <p>- HTML</p>
                    <p>- CSS</p>
                    <p>- JavaScript</p>
                    <p>- React</p>
                    <p>- Redux</p>
                </div>

                <div className="card">
                    <h3>- Back End -</h3>
                    <span className="bar"></span>
                    <p>- Node.JS</p>
                    <p>- Express</p>
                    <p>- SQL</p>
                    <p>- PHP</p>
                </div>
            </div>
        </div>
    )
}

export default MyLanguages
