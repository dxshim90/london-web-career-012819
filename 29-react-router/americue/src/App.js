import React, { Component } from 'react';

import './assets/App.css';
import 'react-svg-map/lib/index.css';

import StatePage from "./containers/StatePage"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"

import { SVGMap, USA } from 'react-svg-map';
import { Switch, Route, withRouter } from "react-router-dom"

class App extends Component {

  clickState = (event) => {
    this.props.history.push(`/state/${event.target.attributes[1].value}`)
  }

  // renderPage(){
  //   switch(this.state.page){
  //     case "home":
  //       return <LandingPage />
  //     case "map":
  //       return <div onClick={this.clickState}><SVGMap map={USA} /></div>
  //     case "state":
  //       return <StatePage state={this.state.selectedState}/>
  //     default:
  //       return <h1>LOADING</h1>
  //   }
  // }

  render() {
    return (
      <div  className="App">
        <Navbar />
        <Switch>
          <Route 
            path="/map" 
            render={(routerProps) => <div onClick={this.clickState}><SVGMap map={USA} /></div>} 
          />
          <Route 
            path="/state/:area" 
            render={(routerProps) => <StatePage {...routerProps}/>} 
          />
          <Route 
            path="/" 
            render={(routerProps) => <LandingPage {...routerProps}/>} 
          />
        </Switch>
      </div>
    );
  }
}
// <Route path="/" component={LandingPage} />


export default withRouter(App);
