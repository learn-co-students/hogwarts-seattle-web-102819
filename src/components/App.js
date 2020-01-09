import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser.js';
import HogFilter from './HogFilter.js';




class App extends Component {
  constructor() {
    super()
    this.state = {
      greased: false,
      sortBy: ""
    };
  }

  handleToggleGreased = () => {
    this.setState(prevState => {
      return { greased: !prevState.greased }
    });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  filterGreased = () => {
    if (this.state.greased) {
      return hogs.filter(hog => hog.greased);
    } else {
      return hogs;
    }
  };

  sortHogs = () => {
    let greaseFilterHogs = this.filterGreased();
    switch (this.state.sortBy) {
      case "weight":
        return greaseFilterHogs.sort((a, b) => {
          return a.weight - b.weight;
        });
      case "name":
        return greaseFilterHogs.sort((a, b) => {
          let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA < nameB) //sort string ascending
            return -1;
          if (nameA > nameB)
            return 1;
          return 0;
          // return a.name.localeCompare(b.name);
        });
      default:
        return greaseFilterHogs;
    }
  };

  // sort(function(a, b){
  //   var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
  //   if (nameA < nameB) //sort string ascending
  //    return -1;
  //   if (nameA > nameB)
  //    return 1;
  //   return 0; //default return value (no sorting)
  //  });



  render() {
    return (
      <div className="App">
          < Nav />
          <HogFilter
            handleToggleGreased={this.handleToggleGreased}
            handleSelectChange={this.handleSelectChange}
          />
          <HogBrowser hogs={this.sortHogs()}/>

          
      </div>
    )
  }
}

export default App;
