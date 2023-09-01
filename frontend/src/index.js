import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project";

ReactDOM.render(
  <BrowserRouter>
  <Project></Project>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();