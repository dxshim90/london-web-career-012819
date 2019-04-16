import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react' 

function withLoading(MyComponent, callback){

  return class extends React.Component {
    render(){
      if (callback(this.props)){
        return (
          <Dimmer active>
            <Loader />
          </Dimmer>
        )
      } else {
        return <MyComponent {...this.props} />
      }
    }
  }
}

export default withLoading