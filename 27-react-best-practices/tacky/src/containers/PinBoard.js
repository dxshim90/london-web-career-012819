import React from 'react'
import PinCard from "../components/PinCard"

function PinBoard ({ pins }) {

  function renderPinCards(){
    const data = pins

    return data.map((pin,index) => {
      return <PinCard key={index} image_url={pin.image_url}/>
    })
  }

    return (
      <div className="pin-board">
        {renderPinCards()}
      </div>
    )
}

export default PinBoard