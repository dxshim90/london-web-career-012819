import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting"

class App extends Component {

  renderGreetings(){
    return this.props.data.map((obj, index) => {
      return <Greeting key={obj.id} {...obj}/>
    })
  }

  render() {

    // return (
    //   <div id="1">
    //     {
    //       data.map(obj => {
    //         return <Greeting phrase={obj.phrase} name={obj.name}/>
    //       })
    //     }
    //   </div>
    // );

   
    console.log("RENDERING APP")

    return (
      <div id="1">
        {this.renderGreetings()}
      </div>
    );
  }
}

export default App;
