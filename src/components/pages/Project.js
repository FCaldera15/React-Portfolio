import React from 'react';
import "../styles/project.css"
import { Github } from "react-bootstrap-icons";
import PWA from '../images/PWA-Text-Editor.png';
import Planets from '../images/plantes.png';
import Workday from '../images/workday.png';
import Tracker from '../images/Employee-Tracker.png';
import Project2 from '../images/project2.png'
import Quiz from '../images/quiz.png'


// Page that contains the projects worked on 
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
                        <a href='https://fcaldera15.github.io/work-day-schedule/'><img className='imageTag' src={Workday} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>Workday Schedule</h3>
                        <p>This application enables users to use this page as a daily planner and save text inside the box corresponding to what time of day you want to save it in.</p>
                        <h3>Technologies Used:</h3>
                        <h5>HTML, CSS, JavaScript, Localstorage, DayJS</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/FCaldera15/work-day-schedule'>
                            <button className="btn-small button-icon">
                                <i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <a href='https://drive.google.com/file/d/1SLH_h4GQnLhAJiTaJkbZeeOfeTGfdKnw/view'><img className='imageTag' src={Tracker} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>Employee Tracker</h3>
                        <p>This repository is used to be able to view and manage the departments, roles, and employees in a company so that they can organize and plan a business</p>
                        <h3>Technologies Used:</h3>
                        <h5>Node.js, Inquirer, MySQL</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/FCaldera15/Employee-Tracker'>
                            <button className="btn-small button-icon">
                                <i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <a href='https://thawing-peak-13246.herokuapp.com/'><img className='imageTag' src={Project2} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>mySteamlist</h3>
                        <p>The user would like a webpage designed to be able to add Steam games to a wishlist or add to favorite games, and also be able to rate and review the games.</p>
                        <h3>Technologies Used:</h3>
                        <h5>Handlebars.js, Express.js, MySQL, Sequalize ORM</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/dawn-kline-m/My-Steam-List'>
                            <button className="btn-small button-icon">
                                <i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>

                <li className="card medium">
                    <div className="card-image">
                        <a href='https://fcaldera15.github.io/Code-Quiz/'><img className='imageTag' src={Quiz} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>Code Quiz</h3>
                        <p>This application enables users to take a quiz and challenge others on who can get the higher score in the scoreboard page.</p>
                        <h3>Technologies Used:</h3>
                        <h5>HTML, CSS, JavaScript</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/FCaldera15/Code-Quiz'>
                            <button className="btn-small button-icon">
                                <i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>
            </ul>
        </div>
    );
}