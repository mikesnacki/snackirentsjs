import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/style.scss";
import Header from './components/Header'
import Home from "./components/Home"
import Properties from "./components/Properties"
import AdminForm from "./components/Admin"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/Properties" exact component={Properties}/>
        <Route path="/Admin" component={AdminForm} />
      </Router>
    </div>
  );
}

export default App;
