import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import TileContainer from './TileContainer'
import hogs from '../porkers_data';
import { WEIGHT } from "../constants.js"

class App extends Component {

  // We added hogs to state:
  // 1. To make it clear that this is the component's source of data
  // 2. When we interact with the controls in the Navbar, they will have an effect on hogs that are displayed
  // 3. Eventually, we will fetch for this data instead of pulling it from a file.
  
  state = {
    hogs: hogs,
    greased: false,
    sortValue: "none"
  }

  handleSortChange = (event) => {
    this.setState({
      sortValue: event.target.value
    })
  }

  handleCheck = (event) => {
    this.setState({
      greased: event.target.checked
    })
  }

  filterHogs = (hogs) => {
    if (this.state.greased){
      return hogs.filter(hog => {
        return hog.greased
      })
    } else {
      return [...hogs]
    }
  }

  sortHogs = (hogs) => {
    switch(this.state.sortValue){
      case "none":
        return hogs
        break;
      case "name":
        return hogs.sort((a,b) => {
          if (a.name < b.name)
            return -1;
          if ( a.name > b.name)
            return 1;
          return 0;
        })
        break;
      case "weight":
        return hogs.sort((a, b) => {
          return a[WEIGHT] - b[WEIGHT]
        })
        break;
    }
  }

  render() {
    // console.log(this.state.sortValue)

    return (
      <div className="App">
          <Nav handleSortChange={this.handleSortChange} handleCheck={this.handleCheck} greased={this.state.greased}/>
          <TileContainer 
            hogs={this.filterHogs(this.sortHogs(this.state.hogs))} />
      </div>
    )
  }
}

export default App;
