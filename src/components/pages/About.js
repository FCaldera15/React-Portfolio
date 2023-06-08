import React from 'react';
import "../styles/about.css"
import PPicture from "../images/portfolio-pic.jpg"

// Page that contains the about me information
export default function About() {
  return (
    <div>
      <div className='center wholePanel'>
        <div className="col s12 m5">
          <div className="card-panel large z-depth-2">
            <div>
              <img className='portfolio-pic' src={PPicture} alt='not working' />
            </div>
            <h1 className='white-text'>About Me</h1>
            <p className="white-text summary">Hello! My name is Francisco Caldera, I was born in Dallas, TX but I have been living in Terrell, TX my whole
              life. While in high school I decided that I wanted to be a Math/ESL teacher, I started going to TVCC to work
              on my basics and then transered to Texas A&M Commerce to work on my degree. After some time i reflected on
              how my future would look like if I continued this path, and after going thru some classes I started to
              realize that I was not truly passionate about teaching and education is general was not doing so well. So I
              started to wonder what else I enjoyed doing and came to realize that I love computors and have always been
              fascinated of how people would make webpages, so that is the reason why I joined the SMU bootcamp in hope to
              find a new passion and have a more secure, favoritable future.
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
