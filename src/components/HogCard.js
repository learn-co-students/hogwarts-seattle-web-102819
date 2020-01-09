import React from 'react'
import HogDetails from './HogDetails.js'


class HogCard extends React.Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
    }

    getImgSrc = (name) => {
        let format = name.split(" ").join("_").toLowerCase()
        let pigSrc = require(`../hog-imgs/${format}.jpg`)
        return pigSrc
        
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
            clicked: !prevState.clicked
        }
    })
    }

    render () {


        return (
            <div className='ui four wide column'>
                <div className="ui link cards"> 
                    <div className="card" onClick={this.handleClick}>
                        <div className="image">
                            <img src={this.getImgSrc(this.props.hog.name)}></img>
                        </div>
                        <div className="content">
                            <div className="header">{this.props.hog.name}</div>
                            {this.state.clicked ? <HogDetails hog={this.props.hog}/>: console.log("not showing piggy details")}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default HogCard