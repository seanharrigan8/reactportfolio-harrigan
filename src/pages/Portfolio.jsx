import React from "react";
import './Portfolio.css';
import Project from '../components/Project';
import netflexsample from '../../src/assets/netlexsample.png';
import triptips from '../../src/assets/triptips.png'






const Portfolio = () => {
    return (
        <div className="Portfolio">
             <h2>Take a look...</h2>

        <ul className="projects-list">
        
            <li>
            <Project
            title="NetFlex"
            image={netflexsample}
            description="NetFlex"
            link="https://project2-team1-netflex.onrender.com/login"
            />
            </li>
            <li>
            <Project
            title="TripTips"
            image={triptips}
            description="Trip Tips With Pals"
            link="https://project1team2jss.github.io/Trip-Tips-With-Pals/" 
            />
</li>   
            </ul>   
        </div>
    );
}

export default Portfolio;