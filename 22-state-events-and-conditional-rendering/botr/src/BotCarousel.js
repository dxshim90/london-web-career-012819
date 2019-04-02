import React, { Fragment } from 'react'
import bots from './data'
import BotPortrait from "./BotPortrait"

class BotCarousel extends React.Component {

  // constructor(props){
  //   super()

  //   this.state = {
  //     botIndex: 0
  //   }
  // }

  state = {
    bots: [...bots],
    botIndex: 0,
    purchasedBots: []
  }
  
  handlePurchase = (event) => {
    
    // console.log(this.state.botIndex)

    // NOOOOOO
    // this.state.purchasedBots.push(bots[this.state.botIndex])

    this.setState({
      purchasedBots: [
       ...this.state.purchasedBots, this.state.botIndex
      ]
    })

    if (this.state.botIndex === this.state.bots.length-1) {
      this.setState({
        botIndex: 0
      })
    } else {
      this.setState({
        botIndex: this.state.botIndex + 1
      })
    }
  }

  handleScrap = (event) => {
    
    // console.log(this.state.botIndex)
    if (this.state.botIndex === this.state.bots.length-1) {
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
    // console.log(this.state.purchasedBots)
    const bot = this.state.bots[this.state.botIndex]

    let color; 
    if (this.state.purchasedBots.includes(this.state.botIndex))
     color = "red"
    else
     color = "black"

    return (
      <Fragment>
        <BotPortrait beef={bot}/>
        <br/>
        <button onClick={this.handleScrap}>Scrap!</button>
        <button style={{color: color}} onClick={this.handlePurchase}>Purchase!</button>
      </Fragment>
    )
  }
}

export default BotCarousel