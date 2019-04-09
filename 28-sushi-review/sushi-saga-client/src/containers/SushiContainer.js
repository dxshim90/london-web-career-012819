import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushis, nextFour, eat, eaten }) => {
  // console.log(props.sushis)
  // Want to display 4 Sushi
  //  - Create a new array, and manually insert the first 4
  //  - Slice 4 elements off of the sushis array


  // console.log(firstFour)

  function renderFour(){

    return sushis.map(sushi => {
      // return <Sushi name={sushi.name} img_url={sushi.img_url} price={sushi.price} />
      return <Sushi 
                key={sushi.id} 
                beenEaten={eaten.includes(sushi.id)} 
                eat={eat} 
                {...sushi} 
              />
    })

  }
  return (
    <Fragment>
      <div className="belt">
        {
          renderFour()
        }
        <MoreButton nextFour={nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer