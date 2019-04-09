import React, { Fragment } from 'react'

const Sushi = ({name, img_url, price, id, eat, beenEaten}) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event) => eat(id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
           beenEaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi