import React from 'react'

function withBasic(MyComponent){

  return class extends React.Component {
    render(){
      return <MyComponent {...this.props} />
    }
  }
}

export default withBasic