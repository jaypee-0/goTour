import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.scss"
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);