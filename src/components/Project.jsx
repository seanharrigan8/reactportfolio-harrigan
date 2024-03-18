import React from "react";
import './Project.css';




const Project = ({ title, image, description, link }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">{title}</a>
            </div>
    )
}

export default Project;