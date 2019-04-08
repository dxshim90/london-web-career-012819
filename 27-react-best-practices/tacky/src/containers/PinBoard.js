import React from 'react'
import PinCard from "../components/PinCard"

class PinBoard extends React.Component {

  renderPinCards(){
    const data = this.props.pins

    return data.map(pin => {
      return <PinCard image_url={pin.image_url}/>
    })
  }

  render(){
    return (
      <div>
        {this.renderPinCards()}
      </div>
    )
  }
}

export default PinBoard