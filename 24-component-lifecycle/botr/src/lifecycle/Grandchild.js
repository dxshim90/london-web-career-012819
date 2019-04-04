import React from 'react'

export default class Grandchild extends React.Component {
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
    console.log("Grandchild RENDER")
    return (
      <div style={{ 
        border: `1px solid`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.click}>Grandchild</p>
      </div>
    );
  }
}