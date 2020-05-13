import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);
    const [buttonDisplayed, setbuttonDisplayed] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        setbuttonDisplayed(!buttonDisplayed);
    }

    const expandedClass = expanded ? 'mobile-nav' : null;
    const buttonDisplayedClass = buttonDisplayed ? 'is-active' : null;

    return (
        <div className="nav-wrapper">
            <div className="grad-bar"></div>
            <nav className="navbar">
                <Link to="/movie-catalogue/">
                    <span id="app-brand">MOVIE APP</span>
                    <i className="fa fa-ticket" aria-hidden="true"></i>
                </Link>
                <div className={`menu-toggle ${buttonDisplayedClass}`} onClick={handleClick} id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav ${expandedClass} no-search`}>
                    <li className="nav-item" onClick={handleClick}><Link to="/movie-catalogue/">Home</Link></li>
                    <li className="nav-item" onClick={handleClick}><Link to="/movie-catalogue/about">About</Link></li>
                    <li className="nav-item" onClick={handleClick}><Link to="/movie-catalogue/search">Search</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;