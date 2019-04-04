import React, { Component } from 'react';
import './assets/App.css';
import BotCarousel from "./containers/BotCarousel"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import NewBot from "./components/NewBot"
// import bots from './apis/data'


class App extends Component {

  state = {
    page: "purchase",
    bots: []
  }
  
  changePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  getBots = () => {
    fetch("http://localhost:3000/api/v1/bots")
    .then(res => res.json())
    .then(data => {
      this.setState({bots: data})
    })
  }

  getMoreBots = () => {
    console.log("GETTING MORE BOTS")
    fetch("http://localhost:3000/api/v1/bots")
    .then(res => res.json())
    .then(data => {
      this.setState({bots: [...this.state.bots, ...data]})
    })
  }

  componentDidMount(){
    this.getBots()
  }
 

  router = () =>{
    let page;
    switch(this.state.page){
      case "home":
        page = <HomePage/>
        break;
      case "purchase":
        page = <BotCarousel getMoreBots={this.getMoreBots} bots={this.state.bots}/> 
        break;
      case "new":
        page = <NewBot addBot={this.addBot}/> 
        break;
      default:
        page = null     
    }
    return page
  }

  addBot = (newBotInfo) => {
    const image_url = `https://robohash.org/${newBotInfo.name}.png?set=set1&size=400x400`
    newBotInfo.image_url = image_url
    newBotInfo.id = this.state.bots.length

    this.setState({
      bots: [...this.state.bots, newBotInfo]
    })

  }

  render() {
    console.log(this.state.bots)
    return (
      <div className="App">
        <Navbar changePage={this.changePage}/>
        {this.router()}
      </div>
    );
  }
}

export default App;
