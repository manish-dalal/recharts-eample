import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App2 from "./App2";
// import App from "./AppContext";

import * as serviceWorker from "./serviceWorker";
// import App from './App';
window.$ = window.jQuery = require("jquery");

ReactDOM.render(
  <Router>
    <Route path="/" render={props => <App2 {...props} />} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
