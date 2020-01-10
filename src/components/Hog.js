import React, { Component } from 'react';
import HogDetails from './HogDetails.js';




class Hog extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: this.props.hogDetails.name,
            clicked: false
        }
    }
    
    getImgSrc = () => {
        function formatName(name){
            let name1 = name.toLowerCase();
            let name2 = name1.replace(/ /g,"_");
            return name2
        }
       let imgResponse = require(`/Users/flatironschool/Desktop/Ruby_coding/React/hogwarts-seattle-web-102819/src/hog-imgs/${formatName(this.state.name)}.jpg`)
       return imgResponse
    }

    handleClick = () => {
        if (this.state.clicked === false) {
            return this.setState(prevState => {
                prevState.clicked = true
            })
        } else {
            return this.setState(prevState => {
                prevState.clicked = false
            })
        }
    }
    
    
    
    
    render() {
      return (
        <div className="ui four wide column" onClick={this.handleClick}> 
            <img src={this.getImgSrc()}></img>
            <div className="content">
                <h1>{this.state.name}</h1>
                { this.state.clicked == true? <HogDetails hogDetails ={this.props.hogDetails}> </HogDetails> : null }
            </div>
        </div>
      )
    }
  }
  
export default Hog;
  