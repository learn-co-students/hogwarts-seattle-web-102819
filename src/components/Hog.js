import React, { Component } from 'react';

class Hog extends Component {
    isGreased = () => {
        if (this.props.hog.greased) {
           return <h4>Greased Status: Greased Up</h4>
    } else {
       return <h4>Greased Status: Not Greased</h4>
        }
    }

    render() {
        const { name, specialty, weight } = this.props.hog
        return (
            <div className='pigTile'>
    <h1>Name: {name}</h1>
    <h4>Specialty: {specialty}</h4>
    {this.isGreased()}
    <h4>Weight: {weight}</h4>
            </div>
        );
    }
}

export default Hog;
