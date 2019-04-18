import React from 'react'
import { connect } from "react-redux"

const Grandchild = (props) => {
  return <div>I'm a little {props.currentUser.name}!</div>
}

function msp(state){  
  return {
    currentUser: state.currentUser,
  }
}


export default connect(msp)(Grandchild)