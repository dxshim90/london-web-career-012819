import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from "./reducer"
import { Provider } from "react-redux"

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root'));




//Dispatch expects to be called with a POJO
                    // This is an action

// const newUser = {
//   username: "Beef",
//   name: "Beefy McSteaker",
//   age: 23
// }    

// const newBook = {
//   title: "How to Steak",
//   publication_year: 2018
// }   

// console.log("BEFORE DISPATCH", store.getState())

// store.dispatch({type: "SET_CURRENT_USER", payload: newUser})
// store.dispatch({type: "ADD_BOOK", payload: newBook})
// store.dispatch({type: "ADD_BOOK", payload: newBook})
// store.dispatch({type: "ADD_BOOK", payload: newBook})
// store.dispatch({type: "ADD_BOOK", payload: newBook})
// store.dispatch({type: "ADD_BOOK", payload: newBook})


// console.log("AFTER DISPATCH", store.getState())