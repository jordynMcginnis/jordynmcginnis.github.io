import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='home-container'>
            <div className='options'>
              <a href='https://github.com/jordynMcginnis'>Github</a>
              <a href='https://github.com/jordynMcginnis/emoji-game'>Twitter</a>
              <a href='https://www.linkedin.com/in/jordyn-mcginnis-51a729150/'>LinkedIn</a>
            </div>
            <div className='name-title'>
              <div className='name'>JORDYN MCGINNIS</div>
              <div className='my-photo'></div>
              <div className='email'>jordynbmcginnis@gmail.com</div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;