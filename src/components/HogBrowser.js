import React from 'react'
import HogCard from './HogCard.js'

class HogBrowser extends React.Component {

    showHogs() {
        return (this.props.hogs.map((hog,index) => {
            return (<HogCard hog={hog} key={index}/>)
        })

        )
    }
    render () {
        return (
            
            <div className="ui grid container">
                {this.showHogs()}
            </div>

        )
    }
}
export default HogBrowser