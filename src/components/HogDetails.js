import React, { Component } from 'react';





class HogDetails extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: this.props.hogDetails.name,
            specialty: this.props.hogDetails.specialty,
            greased: this.props.hogDetails.greased,
            weight: this.props.hogDetails.weight,
            'highest medal achieved': this.props.hogDetails['highest medal achieved'],
        }
    }

    
    
    
    
    
    render() {
      return (
        <div> 
            name: {this.props.hogDetails.name}
            specialty: {this.props.hogDetails.specialty}
            greased: {this.props.hogDetails.greased}
            weight: {this.props.hogDetails.weight}
            highest medal achieved : {this.props.hogDetails['highest medal achieved']}
        </div>
      )
    }
  }
  
export default HogDetails;
  