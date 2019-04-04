import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  state = {
    thing: "thingie"
  }


  static getDerivedStateFromProps(props, state){
    console.log("GDSFP", props.name)
    return null
  }

  click = () => {
    this.setState({
      thing: "new thingie!"
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("did update", this.props.name)
  }

  render(){
    console.log("Parent RENDER")
    return (
      <div style={{ 
        border: `1px solid`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.click}>Parent</p>
        <Child name="child"/>
      </div>
    );
  }
}