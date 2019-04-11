import React, { Component } from 'react';
import './assets/App.css';
import 'react-svg-map/lib/index.css';
import { SVGMap, USA } from 'react-svg-map';
import StatePage from "./containers/StatePage"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"


class App extends Component {

  state = {
    page: "map",
    selectedState: null
  }

  clickState = (event) => {
    this.setState({
      page: "state",
      selectedState: event.target.attributes[1].value
    })
  }

  changePage = (page) => {
    this.setState({
      page: page,
      selectedState: null
    })
  }

  renderPage(){
    switch(this.state.page){
      case "home":
        return <LandingPage />
      case "map":
        return <div onClick={this.clickState}><SVGMap map={USA} /></div>
      case "state":
        return <StatePage state={this.state.selectedState}/>
      default:
        return <h1>LOADING</h1>
    }
  }
  render() {
    return (
      <div  className="App">
        <Navbar changePage={this.changePage} />
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
