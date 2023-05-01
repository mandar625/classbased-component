// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Mounting1 from './Lifecyclemethod/Mounting1';
// import Myclass from './components/Myclass';
// import Constructor from './components/Constructor';
// import Stateclasslearning from './components/Stateclasslearning';
// import Destructuring from './components/Destructuring';
// import EventHandeling from './components/EventHandeling';

export default class App extends Component {
  render() {
    return (
      
      // <div className='App' >App</div>

      <>
      
      {/* <Myclass name={"mandar"} age={20}  >
        child 1
      </Myclass>
      <Myclass name={"rohit"} age={20}  >
        <ol>
          <li>
            mandar chlid 2 
          </li>
          <li>
            mandar
          </li>
          <li>
            mandar
          </li>
        </ol>
      </Myclass>
      <Myclass name={"manfojdar"} age={20}  >
        <button>button1 of child three</button>
      </Myclass> */}

      {/* <Constructor name={"Mandar"} ></Constructor> */}

      {/* <Stateclasslearning  name={"Aditya Marathe"}/> */}
      {/* <Destructuring name="mandar" age={23} /> */}
      {/* <EventHandeling name="Rohit" /> */}


      {/* Life Cycle Method */}

      <Mounting1 city="Aurangabad" ></Mounting1>

      </>

    )
  }
}

