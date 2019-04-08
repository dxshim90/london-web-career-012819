import React from 'react'
import TopicCard from "../components/TopicCard"

//TODO: Pass TopicCards their name and image_url props

class TopicContainer extends React.Component {

  renderTopicCards(){
    const data = this.props.topics

    return data.map(topic => {
      return <TopicCard name={topic.name} image_url={topic.image_url}/>
    })
  }

  render(){

    return (
      <div>
        <h3>
          Hi Person! Your feed is made up of these topics:
        </h3>
        {this.renderTopicCards()}
        <button>Edit</button>
      </div>
    )
  }
}

export default TopicContainer