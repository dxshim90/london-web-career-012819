import React, { Component } from 'react';
import './assets/App.css';
import BotCarousel from "./containers/BotCarousel"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import NewBot from "./components/NewBot"
import bots from './apis/data'


class App extends Component {

  // Bank account 
  state = {
    page: "purchase",
    bots: [...bots]
  }

  // Credit Card
  changePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }
 

  router = () =>{
    let page;
    switch(this.state.page){
      case "home":
        page = <HomePage/>
        break;
      case "purchase":
        page = <BotCarousel bots={this.state.bots}/> 
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
    return (
      <div className="App">
        <Navbar changePage={this.changePage}/>
        {this.router()}
      </div>
    );
  }
}

export default App;
