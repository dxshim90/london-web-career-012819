import React from 'react'

function withAd(MyComponent){

  return class extends React.Component {

    state = {
      clicks: 0,
      displayAd: false
    }

    handleClick = (event) => {

      if (this.state.clicks === 3){
        this.setState({
          clicks: 0,
          displayAd: true
        })
      } else {
        this.setState({
          clicks: this.state.clicks + 1
        })
      }
    }

    closeAd = () => {
      this.setState({
        displayAd: false
      })
    }

    render(){

      if (this.state.displayAd){
        return (
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZUG9qYTJMsI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onClick={this.closeAd}>CLOSE</button>
          </div>
        )
      } else {
        return (
          <div onClick={this.handleClick}>
            <MyComponent {...this.props} />
          </div>
        )
      }
      
    }
  }
}

export default withAd