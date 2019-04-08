  const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  const MEDAL = 'highest medal achieved'

  const API_URL = process.env["NODE_ENV"] === "development" ? "http://localhost:3001/" : "http://my-website.com/"


  export {
    WEIGHT,
    MEDAL,
    API_URL
  }