import React, { Component } from 'react'

export default class Mounting2 extends Component {
    constructor(props) {
        console.log("constructor is called 2")
      super(props)
    
      this.state = {
         name:"Rohit"
      }
    }

    componentDidMount(){

        console.log("component did mount called 2")

    }
  render() {

    console.log("render is called 2")
    

    return (
      <div>
        <h1> {this.props.city} </h1>
        <h2> {this.state.name} </h2>
      </div>
    )
  }
}
