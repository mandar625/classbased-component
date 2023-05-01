import React, { Component } from 'react'

export default class Stateclasslearning extends Component {
    constructor(props){
        super(props);
         this.state ={
            name: this.props.name,
            age:23,
            addres:"saraswati colony"
            // name: 1
         }
    }
     changeName() {

        this.setState({
            name:"Rohit Marathe",
            age:24,
            addres:"Hukuchand nagar"
            // name: this.state.name + 1
        })

        // binding is done in button onClick
        
    }
  render() {
    return (
      <div>
        <h1>State in class based component</h1>
        <h3> this name is comming from state {this.state.name} my ahe is {this.state.age} and agdress is {this.state.addres}</h3>
        {/* <button onClick={()=> this.setState({name:"Rhit Marathe"})} >Click me</button> */}
        <button onClick={() => this.changeName()} >CLick me</button>

        {/* button ke age event binding hui jo class based component ke liye hoti hai.. */}

      </div>
    )
  }
}
