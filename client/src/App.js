import React, { Suspense } from 'react';
import { BrowserRouter as Router, 
        Route } from "react-router-dom";
import "../src/style.scss";
import Header from './components/Header'
import Home from "./components/Home"
import Loading from "./components/Loading"

const Properties = React.lazy(()=> import("./components/Properties"))
const Login = React.lazy(()=> import("./components/Login"))
const Admin = React.lazy(()=> import('./components/Admin'))

function App() {

  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Router>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/properties" exact component={Properties}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
