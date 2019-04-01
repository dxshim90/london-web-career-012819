// import * as React from 'react'
import React, { Component } from 'react'

// function Greeting(props){
  
//   return <h1>{props.phrase + " " + props.name}</h1>
// }

class Greeting extends Component {
  render(){
    console.log(this.props)
    return <h1>{this.props.phrase + " " + this.props.name}</h1>
  }
}

// export {Greeting: Greeting, GreetingClass: GreetingClass }
export default Greeting