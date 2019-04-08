import React, { Component } from 'react';
import './assets/App.css';
import Navbar from "./containers/Navbar"
import TopicContainer from "./containers/TopicContainer"
import PinBoard from "./containers/PinBoard"
import { pins, topics} from "./data.js"


class App extends Component {

  state = {
    user: {
      topics: topics,
      username: "Beefy McSteaker"
    },
    searchTerm: "",
    pins: pins
  }

  setSearchTerm = (newInput) => {
    this.setState({
      searchTerm: newInput
    })
  }

  filterPins = () => {
    const { pins } = this.state

    return pins.filter(pin => {
      return pin.category.includes(this.state.searchTerm)
    })
  }


  render() {
    const { user } = this.state

    const { topics } = user

    return (
      <div className="app">
        <Navbar setSearchTerm={this.setSearchTerm} />
        <TopicContainer topics={topics}/>
        <PinBoard pins={this.filterPins()} />
      </div>
    );
  }
}

export default App;
