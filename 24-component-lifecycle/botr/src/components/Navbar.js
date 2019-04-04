import React from 'react'

export default function Navbar(props){

  // function changeToHome(event){
  //   console.log(event)
  //   props.changePage('home')
  // }

  // html attr => htmlFor in JSX
  return (
    <div className="navbar">
      <button 
        onClick={() => props.changePage('home')} 
        className="home-button"
      >
        Botr
      </button>
      <button 
        onClick={event => props.changePage('purchase')} 
        className="purchase-button"
      >
        Purchase
      </button>
      <button 
        onClick={event => props.changePage('new')}
        className="new-button"
      >
        New Bot
      </button>
    </div>
  )
}