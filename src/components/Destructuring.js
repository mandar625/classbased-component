// import React from 'react'

// function Destructuring() {
//   return (
//     <div>Destructuring</div>
//   )
// }

// export default Destructuring


// import React, { Component } from 'react'

// export default class Destructuring extends Component {
//   render() {
//     const {name,age} = this.props
//     return (
//       <div>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class Destructuring extends Component {
    constructor(){
        super();
        this.state={
            name:"Rohit",
            age:334
        }
    }
  render() {
    const {name,age} = this.state

    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
    )
  }
}
