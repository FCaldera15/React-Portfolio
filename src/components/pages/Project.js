import React from 'react';
import "../styles/project.css"
import { Github } from "react-bootstrap-icons";
import PWA from '../images/PWA-Text-Editor.png';
import Planets from '../images/plantes.png';
import Workday from '../images/workday.png';
import Tracker from '../images/Employee-Tracker.png';
import Project2 from '../images/project2.png'
import Quiz from '../images/quiz.png'

export default function Project() {
    return (
        <div className='flexPanel'>
            <ul className="center projectPanel ">
                <li className="card medium">
                    <div className="card-image">
                        <a href='https://sleepy-depths-70722.herokuapp.com/'>
                            <img className='imageTag' src={PWA} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>PWA Text Editor</h3>
                        <p>As a developer I want to create notes or code snippets with or without an internet connection
                            so that I can reliably retrieve them for later use</p>
                        <h3>Technologies Used:</h3>
                        <h5>Service Worker, IndexedDB, InjectManifest, Workbox</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/FCaldera15/PWA-Text-Editor'>
                            <button className="btn-small button-icon">
                                <i className="left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <a href='https://axelestrada1.github.io/Project-1/'>
                            <img className='imageTag' src={Planets} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>Planets Info</h3>
                        <p>A planet info application to show certian details and information about each planet, A Front-End Application created by and as a group.</p>
                        <h3>Technologies Used:</h3>
                        <h5>HTML, CSS, JavaScript</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/AxelEstrada1/Project-1'>
                            <button className="btn-small button-icon">
                                <i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <img className='imageTag' src={Workday} alt='' />
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <button className="btn-small button-icon"><i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <img className='imageTag' src={Tracker} alt='' />
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <button className="btn-small button-icon"><i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <img className='imageTag' src={Project2} alt='' />
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <button className="btn-small button-icon"><i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <img className='imageTag' src={Quiz} alt='' />
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <button className="btn-small button-icon"><i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button>
                    </div>
                </li>
            </ul>
        </div>
    );
}