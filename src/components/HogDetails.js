import React from 'react'

class HogDetails extends React.Component {
    render() {
        const hog = this.props.hog 
        const hogMedal = hog["highest medal achieved"]

        return (
            
            <div className="meta">
                <p>weight:{this.props.hog.weight}</p>
                <p>specialty:{this.props.hog.specialty}</p>
                <p>highest metal:{hogMedal}</p>
                <p>{this.props.hog.greased ? "Greased" : "Not Greased"}</p>    
            </div>
        )
    }


}

export default HogDetails