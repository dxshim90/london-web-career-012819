import React from 'react'


// TODO: Replace static image src, alt text, and  strong text
function TopicCard(props) {
  return (
    <div>
      <img 
        style={{width: "100px"}} 
        src={props.image_url}
        alt={props.name} 
      />
      <strong>{props.name}</strong>
    </div>
  )
}

export default TopicCard