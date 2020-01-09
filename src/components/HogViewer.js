import React, { Component } from 'react'
import Hog from './Hog'

class HogViewer extends Component {

    renderHogs = () => {
        console.log('RenderHogs called')
         return this.props.hogs.map((hog, index) => {
             console.log('does this matter?')
             return (<Hog hog={hog} key={index} />)
        })
    }

    render() {
        return (
            <div className='hogCard-container'>
                {this.renderHogs()}
            </div>
        )
    }
}

export default HogViewer