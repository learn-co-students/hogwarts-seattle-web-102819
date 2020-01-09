import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogFilter from './HogFilter'
import HogViewer from './HogViewer'
import hogs from '../porkers_data';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       hogs: hogs,
      //  greased: false
    }
    this.showHogs()
  }
  
  showHogs = (filter) => {
    console.log(`called showHogs in App.js ${filter}`)
    // return data from porkers_data.js based on filter selection. 
    // updated showHogs call in constructor to default to show 'all' with default argument
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogFilter onShowHogs={this.showHogs}/>
          < HogViewer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
