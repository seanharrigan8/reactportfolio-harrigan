import React from 'react';
import './Header.css'
import { NavLink, } from 'react-router-dom';
// import AboutMe from '../pages/AboutMe';
// import Contact from '../pages/Contact';
// import Resume from '../pages/Resume';
// import Portfolio from '../pages/Portfolio';

const Header = () => {
    return (
        <header className="header">
            <h1>Sean Harrigan</h1>  
            <nav>
            <ul>
<NavLink exact to="/about" className="active">About Me</NavLink>
<NavLink to="/portfolio" className="active">Projects</NavLink>
<NavLink to="/contact" className="active">Contact</NavLink>
<NavLink to="/resume" className="active">Resume</NavLink>
</ul>
</nav>

        </header>
    );
};

export default Header;
                        