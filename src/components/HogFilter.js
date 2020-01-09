import React from 'react';

class HogFilter extends React.Component {

    handleSelect = (event) => {
        console.log(event.target.value)
        this.props.onShowHogs(event.target.value)
    }

    render (){
        return <div>
            <select onChange={this.handleSelect}>
                <option name='all' value='all'>All Hogs</option>
                <option name='greased' value='greased'>Greased Hogs</option>  
                <option name='ungreased' value='ungreased'>Ungreased Hogs</option>
            </select>
        </div>
    }
}

export default HogFilter