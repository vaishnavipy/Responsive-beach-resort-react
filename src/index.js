import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom"
import {RoomContextProvider} from "./roomContextProvider"


ReactDOM.render(
  <RoomContextProvider>
    <Router>
      <App />
    </Router>
  </RoomContextProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

