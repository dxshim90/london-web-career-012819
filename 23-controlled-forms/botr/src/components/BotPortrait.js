import React from 'react'

function BotPortrait(props){
  return (
    <div className="portrait">
      <h3>{props.bot.name}</h3>
      <img alt={props.bot.name} src={props.bot.image_url}/>
      <div>
        <strong>Power: {props.bot.power}    |    Defense: {props.bot.defense}</strong>
      </div>
    </div>
  )
}

export default BotPortrait