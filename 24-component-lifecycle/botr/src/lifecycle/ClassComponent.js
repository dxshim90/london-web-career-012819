import React, { Component } from 'react';

class ClassComponent extends Component {

  constructor(props){
    super()

    console.log("Constructor " + props.name)
    // console.log(document.getElementById("beef"))
  }

  static getDerivedStateFromProps(props, state){
    console.log("GDSFP", props.name)
    return null
  }

  render() {

    console.log("Render " + this.props.name)

    return (
      <div id="beef" style={{ 
        border: `1px solid ${this.props.color}`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p style={{ color: this.props.color }}>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }

  // *********
  componentDidMount(){
    // console.log(document.getElementById("beef"))
    console.log("DID MOUNT", this.props.name)
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;