import React from 'react';

function Nav() {

    return (
        <nav>
            <div className="nav-wrapper z-depth-3">
                <h1 className="brand-logo hide-on-med-and-down">Francisco Caldera</h1>
                <ul id="nav-mobile" className="right">
                    <li className='nav-side'><a className='nav-text' href="#home">About Me</a></li>
                    <li className='nav-side'><a className='nav-text' href="#portfolio">Portfolio</a></li>
                    <li className='nav-side'><a className='nav-text' href="#contact-me">Contact Me</a></li>
                    <li className='nav-side'><a className='nav-text' href="#resume">Resume</a></li>
                    <li>
                        <a className="footerLink" href="https://github.com/echo1826" target="_blank" rel="noreferrer"><i className="fab fa-github fa-5x footerIcon"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav