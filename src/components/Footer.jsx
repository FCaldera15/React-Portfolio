import React from "react"
import './styles/footer.css'
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";


// Footer containing icons that go to different social networks
function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <ul className="iconRows">
                    <li>
                    <a href="https://github.com/FCaldera15"><Github size={90} className="iconPacks" /></a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/franciscojcaldera/"><Linkedin size={90} className="iconPacks" /></a>
                    </li>
                    <li>
                    <a href="mailto:francisco.caldera2015@gmail.com"><EnvelopeAtFill size={90} className="iconPacks" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer