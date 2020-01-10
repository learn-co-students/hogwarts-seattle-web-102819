import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog.js';
import HogIndex from './HogsIndex.js';

class App extends Component {
  
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
          <Nav />
          <HogIndex allHogs={hogs}> </HogIndex>
      </div>
    )
  }
}

export default App;
