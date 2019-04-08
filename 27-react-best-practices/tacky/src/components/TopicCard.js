import React from 'react'


// TODO: Replace static image src, alt text, and  strong text
class TopicCard extends React.PureComponent {
    render(){
      console.log("RENDERING TOPIC CARD")
      const { image_url, name } = this.props

      return (
        <div>
          <img 
            style={{width: "100px"}} 
            src={image_url}
            alt={name} 
          /><br/>
          <strong>{name}</strong>
        </div>
      )
    }
}


export default TopicCard