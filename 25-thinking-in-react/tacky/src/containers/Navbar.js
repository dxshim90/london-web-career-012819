import React from 'react'
import SearchBar from "../components/SearchBar"
import UserModule from "../components/UserModule"


class Navbar extends React.Component {
  render(){
    return (
      <div>
        <button>P</button>
        <SearchBar setSearchTerm={this.props.setSearchTerm} />
        <UserModule />
      </div>
    )
  }
}

export default Navbar






// import React from 'react'

// class Navbar extends React.Component {
//   render(){
//     return <div>NAVBAR!</div>
//   }
// }

// export default Navbar