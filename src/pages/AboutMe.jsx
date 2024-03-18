import React from 'react';
import './AboutMe.css';
import portfolio from '../../src/assets/portfolio.png';

const AboutMe = () => {
  return (
    <div className="about-me">
    
      <div className="about-me-text">
      <h2>About Me</h2>
      <p>Hello! I'm Sean Harrigan, a passionate student developer based in Chicago, Illinois. I'm currently honing my skills at the Northwestern University Bootcamp,</p>

      <p>With a background in teaching English, I bring strong communication skills and a knack for simplifying complex concepts to the table.</p>

      <p>My journey into coding has been driven by a love for problem-solving and a desire to create innovative solutions. I'm excited to leverage my newfound skills to tackle challenging projects. .</p>

      <p>Let's connect and explore the possibilities of collaboration and growth in the world of software development!</p>

    </div>
    <div className="profile-image">
        <img src={portfolio} alt="Sean Harrigan" class="profile-image" />
      </div>
    </div>
  );
}

export default AboutMe;
