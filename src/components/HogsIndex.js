import React, { Component } from 'react';
import Hog from './Hog.js';






class HogIndex extends Component {
    constructor(){
        super()
        this.state = {
            filter1: 'all'
        }
    }
    
    
    
    
    
    showHogs = (allHogs) => {
        let filter2 = this.state.filter1
        console.log(filter2)
        switch (filter2){
                   case 'greased?':
                       let afilteredHogs = allHogs.filter(item => {
                            return item.greased === true
                       })
                       return (
                        afilteredHogs.map((item, index) => {
                            return (
                                <Hog key={index} hogDetails={item}> </Hog>
                            )
                        })
                       )
                       case "sort by weight":
                           let wfilteredHogs = allHogs.sort((a,b) => {
                            if(a.weight < b.weight){
                                return 1
                            }
                           })
                           return (
                            wfilteredHogs.map((item, index) => {
                                return (
                                    <Hog key={index} hogDetails={item}> </Hog>
                                )
                            })
                           )
                           case "sort by name":
                            let nfilteredHogs = allHogs.sort((a,b) => {
                                if(a.name < b.name){
                                    return 1
                                }
                               })
                               return (
                                nfilteredHogs.map((item, index) => {
                                    return (
                                        <Hog key={index} hogDetails={item}> </Hog>
                                    )
                                })
                               )
                               default:
                            return (
                                allHogs.map((item, index) => {
                                    return (
                                        <Hog key={index} hogDetails={item}> </Hog>
                                    )
                                })
                            )
            }
        }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            filter1 : e.target.value
        })
    }
    
    
    
    
    
    
    
    
    
    render() {
      return (

        <div>
                    <select onChange={this.handleChange}>
                        <option value="all">all</option>
                        <option value="greased?">greased?</option>
                        <option value="sort by weight">sort by weight</option>
                        <option value="sort by name">sort by name</option>
                    </select>
            <div className="ui grid container"> 
                {this.showHogs(this.props.allHogs)}
            </div>
       </div>
      )
    }
}
  
export default HogIndex;
  