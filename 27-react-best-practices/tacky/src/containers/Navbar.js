import React from 'react'
import SearchBar from "../components/SearchBar"
import UserModule from "../components/UserModule"


function Navbar (props) {
    return (
      <div className="navbar">
        <img style={{height: "30px", margin: "5px"}}src="https://i.pinimg.com/280x280_RS/a8/ef/98/a8ef985655a5b4b2b5d1dbb7b47dfc9c.jpg" alt="pinterest"/>
        <SearchBar setSearchTerm={props.setSearchTerm} beef={undefined} />
        <UserModule />
      </div>
    )
}

export default Navbar






// import React from 'react'

// class Navbar extends React.Component {
//   render(){
//     return <div>NAVBAR!</div>
//   }
// }

// export default Navbar