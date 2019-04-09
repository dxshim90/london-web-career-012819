import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    eaten: [],
    budget: 100
  }

  nextFour = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

  eat = (id) => {
    const sushiPrice = this.state.sushis.find(sushi => sushi.id === id).price

    const newBudget = this.state.budget - sushiPrice

    if (newBudget >= 0 && !this.state.eaten.includes(id)){
      const newEaten = [...this.state.eaten, id]
      this.setState({
        eaten: newEaten,
        budget: newBudget
      })
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        sushis: data
      })
    })
  }

  render() {
    const { sushis, startIndex, eaten, budget } = this.state

    const fourSushis = sushis.slice(startIndex, startIndex+4)

    return (
      <div className="app">
        <SushiContainer eat={this.eat} eaten={eaten} nextFour={this.nextFour} sushis={fourSushis}/>
        <Table eaten={eaten} budget={budget} />
      </div>
    );
  }
}

export default App;