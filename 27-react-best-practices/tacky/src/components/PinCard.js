import React from 'react'

function PinCard (props){
    return <img 
      style={{width: "300px"}}
      src={props.image_url}
      alt="cat box" />
}

export default PinCard