// import React, { Component } from 'react'

// export default class EventHandeling extends Component {

//    handleClick(){
//     alert("you clicked")
//    }

//   render() {
//     return (
//       <button onClick={this.handleClick} >Click me</button>
//     )
//   }
// }

import React, { Component } from "react";

export default class EventHandeling extends Component {
  render() {
    // agar render ke andar hai to this laane ki jarurat nahi hai....
    const handleClick = (name) => {
      alert(`hello ${name} `);
    };
    return (
      <div>
        <button
          onClick={() => {
            handleClick(this.props.name);
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

// import React from 'react'

// export default function EventHandeling() {
//     const handleClick = (name)=>{
//         alert(`hello ${name} `)
//     }
//   return (
//     <div>
//         <button onClick={()=>{handleClick("mandar")}}  >Click Me</button>
//     </div>
//   )
// }
