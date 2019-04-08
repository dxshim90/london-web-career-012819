import React, { Component } from 'react';
import Tile from './Tile'

class TileContainer extends Component {

  renderTiles(){
    const data = this.props.hogs

    return data.map( (hog,index) => {
      // How do we want to pass down data to Tile?
      // 1. Deconstruct each hog into props
      // 2. Pass the whole object down

      return <Tile key={index} {...hog}/>
    })
  }

  render() {
    return (
      <div className="ui grid container">
        {this.renderTiles()}
      </div>
    )
  }
}

export default TileContainer;
