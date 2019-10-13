import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../src/style.scss";
import Header from './components/Header'
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
