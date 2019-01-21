import React, { Component } from 'react';
import './App.css';
import { FaGithubSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='home-container'>
            <div className='name-title'>
              <div className='name'>JORDYN MCGINNIS</div>
              <div className='my-photo'></div>
              <div className='email'>jordynbmcginnis@gmail.com</div>
              <div className='options'>
                <a href='https://github.com/jordynMcginnis'><FaGithubSquare/></a>
                <a href='https:twitter.com/jordynbmcginnis'><FaTwitterSquare/></a>
                <a href='https://www.linkedin.com/in/jordyn-mcginnis-51a729150/'><FaLinkedin/></a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;