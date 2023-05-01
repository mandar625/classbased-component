import React, { Component } from 'react'

export default class Myclass extends Component {
  render() {
    return (

      <>
        <h2>my nmae is {this.props.name} ad my age is {this.props.age} </h2>
        {this.props.children}
      
      </>
    )
  }
}
