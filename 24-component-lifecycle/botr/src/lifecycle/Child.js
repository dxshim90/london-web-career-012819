import React from 'react'
import Grandchild from './Grandchild'

export default class Child extends React.Component {
  state = {
    thing: "thingie"
  }


  static getDerivedStateFromProps(props, state){
    console.log("GDSFP", props.name)
    return null
  }


  // shouldComponentUpdate(nextProps, nextState){
  //   return false
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("did update", this.props.name)
  }

  click = () => {
    this.setState({
      thing: "new thingie!"
    })
  }

  render(){
    console.log("Child RENDER")

    return (
      <div style={{ 
        border: `1px solid`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.click}>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}