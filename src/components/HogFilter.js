import React from 'react'

class HogFilter extends React.Component {


    render () {
        return (
            <div className="filter">
                <div>
                    <div>
                        <label>Sort by </label>
                    </div>
                    <div>
                        <select
            
                            onChange={this.props.handleSelectChange}
                            >
                            <option value="">Select Filter</option>
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                    </div>
                    <div>
                        <label> Greased? 
                            <input
                                onChange={this.props.handleToggleGreased}
                                type="checkbox"
                            />
                        </label>
                    </div>
                
                </div>
                <br></br>
            </div>
        )
    }
}
    
export default HogFilter
