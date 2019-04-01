import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function Greeting(props){
    return <h1>{props.phrase + props.name}</h1>
  }

ReactDOM.render(
  <div id="1">
    <Greeting phrase="Hello World" name="Steven"/>
    <Greeting phrase="Wutup London" />
    <Greeting phrase="Beefy Steak" name="Sander"/>
  </div>,
  document.getElementById('root')
);


// function Greeting(phrase, name){
//   return <h1>{phrase + name}</h1>
// }

// ReactDOM.render(
//   <div>
//     {Greeting("Hello World", "Steven")}
//     {Greeting("Wutup London", "Dan")}
//     {Greeting("Beef Steak", "Sander")}
//   </div>,
//   document.getElementById('root')
// );


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// User.new("Steven", 28, "Instructor")
// User.new(name: "Steven", age: 28, occupation: "Instructor")

