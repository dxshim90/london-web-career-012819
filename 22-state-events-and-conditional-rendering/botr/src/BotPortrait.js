import React from 'react'

function BotPortrait(props){
  return <img alt={props.beef.name} src={props.beef.image_url}/>
}

export default BotPortrait