import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signin from "./signin";
import Signup from "./signup";
import {Router ,Route,browserHistory} from "react-router";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="./app" component={App} />
    <Route path="./signin" component={Signin} />
    <Route path="./signup" component={Signup} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
