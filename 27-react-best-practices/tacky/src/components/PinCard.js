import React from 'react'

function PinCard ({ image_url = "default url" }){
    return <img 
      style={{maxWidth: "250px"}}
      src={image_url}
      alt="cat box" />
}

export default PinCard