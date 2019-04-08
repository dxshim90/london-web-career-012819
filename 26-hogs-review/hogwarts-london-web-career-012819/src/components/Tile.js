import React, { Component } from 'react';
import { WEIGHT, MEDAL } from '../constants.js'


  // {
  //   name: 'Mudblood',
  //   specialty: 'Mediocre magic',
  //   greased: false,
  //   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  //   'highest medal achieved': 'bronze'
  // },

  // const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  // const MEDAL = 'highest medal achieved'

class Tile extends Component {

  state = {
    clicked: false
  }

  convertToFileName = () => {
    return this.props.name.split(" ").join("_").toLowerCase() + ".jpg"
  }

  toggle = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div onClick={this.toggle} className="ui eight wide column">
        <h1>{this.props.name}</h1>
        {
          this.state.clicked ?
          <div>
            <p>Specialty: {this.props.specialty}</p>
            <p>Weight: {this.props[WEIGHT]}</p>
            <p>Highest Medal: {this.props[MEDAL]}</p>
          </div>
          :
          <img 
          src={`./hog-imgs/${this.convertToFileName()}`}
          alt={this.props.name}/>
        }
      </div>
    )
  }
}

export default Tile;
