import React from "react";
import ReactDOM from "react-dom";
import App from "./componenets/App";
import "bootstrap/dist/css/bootstrap.min.css";
import 'alertifyjs/build/css/alertify.min.css'
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
    <Router>
    <App/>
    </Router>
  ,
  document.getElementById("root")
);
