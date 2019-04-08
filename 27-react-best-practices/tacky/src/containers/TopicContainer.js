import React from 'react'
import TopicCard from "../components/TopicCard"

//TODO: Pass TopicCards their name and image_url props

class TopicContainer extends React.Component {

  renderTopicCards(){
    const data = this.props.topics

    return data.map((topic,index) => {
      const { name, image_url } = topic
      return <TopicCard key={index} name={name} image_url={image_url}/>
    })
  }

  render(){

    return (
      <div className="topic-container">
        <h3>
          Hi Person! Your feed is made up of these topics:
        </h3>
        <div className="topic-cards">
          {this.renderTopicCards()}
          <button>Edit</button>
        </div>
      </div>
    )
  }
}

export default TopicContainer