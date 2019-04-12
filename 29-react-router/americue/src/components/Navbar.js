import React from 'react'
import { Menu } from "semantic-ui-react"
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props)
  return (
    <Menu>
      <Menu.Item onClick={() => props.history.push("/")}>AMERICUE</Menu.Item>
      <Menu.Item onClick={() => props.history.push("/map")} >Map</Menu.Item>
    </Menu>
  )
}

// <NavLink className="item" to="/">AMERICUE</NavLink>
// <NavLink className="item" to="/map">Map</NavLink>


// Using the history object
// 1. Can put on things other than links
// 2. 

export default withRouter(Navbar)