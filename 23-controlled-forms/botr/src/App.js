import React, { Component } from 'react';
import './assets/App.css';
import BotCarousel from "./containers/BotCarousel"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import NewBot from "./components/NewBot"


class App extends Component {
  state = {
    page: "purchase"
  }

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
        page = <BotCarousel/> 
        break;
      case "new":
        page = <NewBot/> 
        break;
      default:
        page = null     
    }
    return page
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.router()}
      </div>
    );
  }
}

export default App;
