import React from 'react'

class SearchBar extends React.Component {

  state = {
    searchInput: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.setSearchTerm(this.state.searchInput)
  }

  
  render(){
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          style={{width: "90%", height: "100%"}}
          type="text"
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.handleChange}
          placeholder="Search for tacks!"/>
      </form>
    )
  }
}

SearchBar.defaultProps = {
  // beef: "steak"
  setSearchTerm: () => {}
}

export default SearchBar