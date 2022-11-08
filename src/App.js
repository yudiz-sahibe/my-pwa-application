import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div classNameName="App">
     <div className="contact">
  <div style={{maxWidth: '400px'}} classNameName='brand'>
    <img style={{width: '90%'}} src={logo} alt="" />
  </div>
  <div className="contact-form">
    <label for="name">
      <span className="input-name">
        Name:
      </span>
      <input type="text" name="name" id="name" className="name"></input>
</label>
    <label for="email">
      <span className="input-name">
        Email address:
      </span>
      <input type="text" name="email" id="email" className="email"></input>
    </label>
    <label for="project-info">
      <span className="input-name">
        Tell about your project:
      </span>
      <textarea name="project-info" id="project-info" className="project-info"></textarea>
    </label>
    <button className="btn send-btn">
      Send
    </button>
  </div>
</div>
    </div>
  );
}

export default App;