import React from 'react'
import { Segment } from "semantic-ui-react"

const LandingPage = (props) => {
  return (
    <Segment padded>
      <div className="splash">
        <img className="imag landing-image" src="https://www.thesun.co.uk/wp-content/uploads/2016/05/NINTCHDBPICT000168911851.jpg?strip=all&quality=100&w=1200&h=800&crop=1" alt="splash"/>
      </div>
    </Segment>
  )
}

export default LandingPage