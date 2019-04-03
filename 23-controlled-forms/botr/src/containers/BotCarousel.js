import React from 'react'
import BotPortrait from "../components/BotPortrait"

class BotCarousel extends React.Component {

  state = {
    botIndex: 0,
    purchasedBots: []
  }
  
  handlePurchase = (event) => {
    if (!this.state.purchasedBots.includes(this.state.botIndex)){
      this.setState({
        purchasedBots: [
         ...this.state.purchasedBots, this.state.botIndex
        ]
      })
    }

    this.nextBot()  
  }

  

  nextBot = () => {
    if (this.state.botIndex === this.props.bots.length-1) {
      this.setState({
        botIndex: 0
      })
    } else {
      this.setState({
        botIndex: this.state.botIndex + 1
      })
    }
  }

  render(){
    const bot = this.props.bots[this.state.botIndex]

    return (
      <div className="carousel">
        <button onMouseEnter={this.nextBot}>Scrap!</button>
        <BotPortrait bot={bot}/>
        <button onMouseEnter={this.handlePurchase}>Purchase!</button>
      </div>
    )
  }
}

export default BotCarousel