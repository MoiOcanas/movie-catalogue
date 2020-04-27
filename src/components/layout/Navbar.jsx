import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Navbar extends Component {
    componentDidMount = () => {
        $("#search-icon").click(function () {
            $(".nav").toggleClass("search");
            $(".nav").toggleClass("no-search");
            $(".search-input").toggleClass("search-active");
        });

        $('.menu-toggle').click(function () {
            $(".nav").toggleClass("mobile-nav");
            $(this).toggleClass("is-active");
        });
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="grad-bar"></div>
                <nav className="navbar">
                    <Link to="/">
                        <span>MOVIE APP</span>
                        <i className="fa fa-ticket" aria-hidden="true"></i>
                    </Link>
                    <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="nav no-search">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/search">Search</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;