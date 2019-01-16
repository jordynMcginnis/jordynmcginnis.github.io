import React, { Component } from 'react';
import './App.css';
import {Carousel} from 'react-responsive-carousel'
var ReactDOM = require('react-dom');

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='home-container'>

            <div className='skills'>

              <div className='travel-border'>
              </div>
            </div>
            <div className='my-photo'>

            </div>
            <div className= 'links'>
            <a href='https://www.github.com/jordynmcginnis'>
              <div className='github'>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/jordyn-mcginnis/'>
              <div className='linkedin'>

              </div>
            </a>
            <a href='https://www.twitter.com/jordynbmcginnis'>
              <div className='twitter'>

              </div>
            </a>

            </div>
            <div className='work'>

              <h3> TYLER MCGINNIS.COM </h3>
              <h6>  2017 - Current </h6>
            </div>
            <div className='my-projects'>
              <div className='carosel'>
                <Carousel showArrows={false} >
                <div>
                    <img src="./photo/c.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./photo/c.png" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
              </div>
              <h1>PROJECTS</h1>
            </div>
          </div>
          <div className='projects'>
            PROJECTS
          </div>
          <a href='https://github-stalker-3d07a.firebaseapp.com/'>
            <div className='github-stalker'>
            </div>
          </a>
           <a href='https://github-battle-e1213.firebaseapp.com/'>
            <div className='github-battle'>
            </div>
          </a>
           <a href='https://connect-four-88bb2.firebaseapp.com/'>
            <div className='connect-four'>
            </div>
          </a>
           <a href='https://github.com/SeaBNB/Bookings'>
            <div className='sea-bnb'>
            </div>
          </a>
          <div className='ns'>
            JORDYN MCGINNIS
          </div>
          <div className='bottom'>
          </div>

      </div>
    );
  }
}

export default App;




