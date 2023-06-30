import React from 'react';
import "../styles/project.css"
import { Github } from "react-bootstrap-icons";
import PWA from '../images/PWA-Text-Editor.png';
import Planets from '../images/plantes.png';
import Book from '../images/Book.png';
import Tracker from '../images/Employee-Tracker.png';
import Project2 from '../images/project2.png'
import FlavorFile from '../images/TheFlavorFile.png'

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
                        <a href='https://infinite-ocean-14632.herokuapp.com/'><img className='imageTag' src={Book} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>Workday Schedule</h3>
                        <p>This application enables users to use this page as a daily planner and save text inside the box corresponding to what time of day you want to save it in.</p>
                        <h3>Technologies Used:</h3>
                        <h5>React.js, MongoDB, GraphQL, Apollo Express, jsonwebtoken, Express.js</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/FCaldera15/Book-Search-Engine'>
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
                        <a href='https://ancient-sea-83306-fd93f66bba61.herokuapp.com/'><img className='imageTag' src={Project2} alt='' /></a>
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
                        <a href='https://ancient-forest-88387-23a1d890f447.herokuapp.com/'><img className='imageTag' src={FlavorFile} alt='' /></a>
                    </div>
                    <div className="card-content">
                        <h3>Code Quiz</h3>
                        <p>This application enables users to be able to add, view, edit or delete a recipe</p>
                        <h3>Technologies Used:</h3>
                        <h5>JavaScript, React.js, Node.js, Express.js, CSS, GraphQL, MongoDB, Mongoose, API, JWT</h5>
                    </div>
                    <div className="card-action">
                        <a href='https://github.com/jdiego-1805/TheFlavorFile'>
                            <button className="btn-small button-icon">
                                <i className="icon-button left"><Github className='project-githubIcon' /></i>Repository</button></a>
                    </div>
                </li>
            </ul>
        </div>
    );
}