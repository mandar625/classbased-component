import React, { Component } from 'react'
import Mounting2 from './Mounting2'

export default class Mounting1 extends Component {
    constructor(props) {
        console.log("constructor is called 1")
      super(props)
    
      this.state = {
         name:"mandar"
      }
    }

    componentDidMount(){

        console.log("component did mount called 1")

    }
  render() {

    console.log("render is called 1")
    

    return (
      <div>
        <h1> {this.props.city} </h1>
        <h2> {this.state.name} </h2>
        <Mounting2 city="Mumbai" />
      </div>
    )
  }
}
