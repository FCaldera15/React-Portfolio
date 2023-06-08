import React from 'react';
import "../styles/contact.css"


// Page containing the contact form 
export default function Contact() {
  return (
    <div className='field'>
      <form className="container z-depth-5">
        <h1 className='center'>Please Fill Out The Form</h1>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
            <label className='active' htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label className='active' htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label className='active' htmlFor="email">Email</label>
        </div>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label className='active' htmlFor="textarea1">Additional Comments</label>
        </div>
        <button className="btn" type="submit" name="action">Submit
          <i className="material-icons submitbtn right">send</i>
        </button>
      </form>
    </div>
  );
}
