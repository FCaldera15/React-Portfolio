import React from 'react';
import "../styles/resume.css"
import Resume from '../images/Cisco-Resume.pdf'

// Resume page that contains the resume button and lists of languages and technologies learned
export default function Resumes() {
  return (

    <div className='center'>

      <div className='center box-1'>
        <a href={Resume} className=" btn">Download my Resume here</a>
      </div>

      <h1 className='center'>Languages</h1>
      <div className='box-2'>
        <ul className='center'>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>

      <h1>Front End</h1>
      <div className='box-2'>
        <ul className='center'>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Next.js</li>
          <li>web3.js</li>
        </ul>
      </div>

      <h1>Backend</h1>
      <div className='box-2'>
        <ul className='center'>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Sequelize</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>

    </div>
  );
}
