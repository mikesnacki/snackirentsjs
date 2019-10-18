import React, {useState} from 'react';
import { BrowserRouter as Router, 
        Route, Redirect } from "react-router-dom";
import "../src/style.scss";
import Header from './components/Header'
import Home from "./components/Home"
import Properties from "./components/Properties"
import AdminForm from "./components/Admin"

const PrivateRoute = ({component: Component, ...rest})=>(
  <Route {...rest} render={(props)=>(
    (auth.isAuthenticated === true)
    ? <Component {...props}/> 
    : <Redirect to={{
      pathname:"/login",
      state:{from: props.location}
    }}/>
  )}/>
)

const auth = {
  isAuthenticated: false,
  authenticate(callback){
      this.isAuthenticated = true
      setTimeout(callback, 100)
  },
  signout(callback){
      this.isAuthenticated = false
      setTimeout(callback, 100)
  }
}

const Login =()=> {

  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  const login = () => {
    auth.authenticate(() => {
      setRedirectToReferrer(true)
    })
  }
    const { from } = { from: { pathname: '/admin' } } || { from: { pathname: '/' } }

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className="container-padding margin-top align-center">
        <h2>You must log in to view the page</h2>
        <div className="flex-row flex-row-center space-evenly">
          <label>Username</label>
          <input className="admin-inputs border-secondary"></input>
        </div>
        <div className="flex-row flex-row-center space-evenly">
          <label>Password</label>
          <input className="admin-inputs border-secondary"></input>
        </div>
        <button className = "btn-primary btn-login" onClick={login}>Log in</button>
      </div>
    )
}

function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/properties" exact component={Properties}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={AdminForm} />
      </Router>
    </div>
  );
}

export default App;
