import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <div id="1">
//     <Greeting phrase="Hello World" name="Steven"/>
//     <Greeting phrase="Wutup London" />
//     <Greeting phrase="Beefy Steak" name="Sander"/>
//   </div>,
//   document.getElementById('root')
// );

let data = [
      {
        phrase: "Hello World",
        id: 1,
        name: "Steven"
      },      
      {
        phrase: "Wutup London",
        id: 2,
        name: "Dan"
      },      
      {
        phrase: "Beefy Steak",
        id: 3,
        name: "Sander"
      },
    ]

// let data2 = [
//       {
//         phrase: "HELLOOOOO",
//         id: 1,
//         name: "BIZZARO STEVEN"
//       },      
//       {
//         phrase: "WUTUP LONDONNNN",
//         id: 2,
//         name: "BIZZARO Dan"
//       },     
//     ]

ReactDOM.render(
  // <Fragment>
    <App data={data}/>
    // <App data={data2}/>
  , document.getElementById('root'));

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



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// User.new("Steven", 28, "Instructor")
// User.new(name: "Steven", age: 28, occupation: "Instructor")

