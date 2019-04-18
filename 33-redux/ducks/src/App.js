import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from "./Parent"
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.currentUser.name}</h1>
        <Parent />
      </div>
    );
  }
}

function mapStateToProps(state){  
  return {
    currentUser: state.currentUser,
    books: state.books
  }
}

export default connect(mapStateToProps)(App);
