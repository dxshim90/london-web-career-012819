import React from 'react'
import { Menu } from "semantic-ui-react"

const Navbar = ({ changePage }) => {
  return (
    <Menu>
      <Menu.Item onClick={() => changePage("home")}>AMERICUE</Menu.Item>
      <Menu.Item onClick={() => changePage("map")}>Map</Menu.Item>
    </Menu>
  )
}

export default Navbar