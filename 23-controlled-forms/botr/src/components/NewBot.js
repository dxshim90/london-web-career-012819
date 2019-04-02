import React from 'react'

export default class NewBot extends React.Component{

  render(){
    return (
      <div>
        <form>
          <input placeholder="Enter name..."/>
          <input type="number" placeholder="Enter power..."/>
          <input type="number" placeholder="Enter defense..."/>
          <input type="submit" value="Submit Schematics"/>
        </form>
      </div>
    )
  }
}