import React from 'react'

export default class NewBot extends React.Component{

  

  // constructor(props){
  //   super()
  //   this.state = {
  //     name: "",
  //     power: 0,
  //     defense: 0
  //   }

  //   this.handleChange = this.handleChange.bind(this)
  // }

  state = {
    name: "",
    power: 0,
    defense: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBot(this.state)
    this.setState({
      name: "",
      power: 0,
      defense: 0
    })
  }



  render(){

    // How do we capture input in vanilla JS
    // User types in inputs
    // On submit, we would grab the values from the inputs and do whatever
    return (
      <div onSubmit={this.handleSubmit}>
        <form>
          <input 
            onChange={this.handleChange} 
            value={this.state.name}
            name="name"
            placeholder="Enter name..."/>
          <input 
            type="number" 
            onChange={this.handleChange} 
            name="power"
            value={this.state.power}
            placeholder="Enter power..."/>
          <input 
            type="number"
            onChange={this.handleChange} 
            name="defense"
            value={this.state.defense}
            placeholder="Enter defense..."/>
          <input type="submit" value="Submit Schematics"/>
        </form>
      </div>
    )
  }
}