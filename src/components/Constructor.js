import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(props)
    {

        super(props);
        console.log("constructr is called");
    }
  render() {
    return (
      <div>
        <h1> Hello World form clasd component and this props comming "===="{this.props.name} </h1>
      </div>
    )
  }
}
