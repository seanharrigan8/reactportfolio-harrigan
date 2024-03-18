import React from 'react';
import './AboutMe.css';
import portfolio from '../../src/assets/portfolio.png';

const AboutMe = () => {
  return (
    <div className="about-me">
    
      <div className="about-me-text">
      <h2>About Me</h2>
      <p>This is where you can write a brief description about yourself.</p>

    </div>
    <div className="profile-image">
        <img src={portfolio} alt="Sean Harrigan" class="profile-image" />
      </div>
    </div>
  );
}

export default AboutMe;
