import React from 'react';
import leaf from '../art/leafCompressed.png';
import acorn from '../art/acornCompressed.png';

const Announcement = ({selectPage}) => {
    let showDetails = () => {selectPage("Details")};
    let rand = Math.random();
    let names = ["Andrew Paul Rogers", "Stephanie Rose Springer"];
    let firstName = (rand > 0.5) ? names[0] : names[1];
    let secondName = (rand > 0.5) ? names[1] : names[0];
    return(
        <div id="Announcement">
            <div className="header">
                <h1>
                    <span className="name">{firstName}</span> 
                    <br /><span className="and">and</span> 
                    <br /><span className="name">{secondName}</span> 
                </h1>
            </div>
            <div id="divider">
                <img src={leaf} className="leaf left" />
                <img src={acorn} className="acorn" />
                <img src={leaf} className="leaf right" />
            </div>
            <span className="weddingDate serifText">09 • 14 • 19</span>
            <p>
                <span className="myButton" onClick={showDetails} >
                    More Information
                </span>
            </p>

        </div>
    )
}

export default Announcement;