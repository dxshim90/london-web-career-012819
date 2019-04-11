import React from 'react'

const LocationCard = ({ location }) => {
  return (
    <div className="image-cards">
      <strong>{location.name}</strong>
      <div className="img_wrapper">
        <img className="image" alt={location.name} src={location.image_url} />
      </div>
      <p>Phone: {location.display_phone}</p>
      <p>Reviews: {location.review_count}</p>
      <p>Rating: {location.rating}</p>
      <a href={location.url}>Yelp</a>
    </div>
  )
}

export default LocationCard