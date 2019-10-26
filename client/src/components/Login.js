import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
  
const Login =()=> {
  
    const [authentication, setAuthentication] = useState({
                                        username:"",
                                        password:"",
                                        loggedIn: false,
                                        redirectTo: null,
                                      })

    const handleChange =(e)=>{
      const name = e.target.name
      const value = e.target.value
  
      setAuthentication(prevState=>({
          ...prevState,
          [name]: value,
      }))
    }

    const login =(e)=>{
        e.preventDefault()

        const userInfo = {
            username: authentication.username,
            password: authentication.password,
        }

        axios.post(`/api/login`, userInfo)
        .then(resp=>{
            if (resp.status===200){
                setAuthentication(prevState=>({
                    ...prevState,
                    loggedIn: true,
                    redirectTo:"/admin"
                }))
            }
        })
        .catch(err=>console.log(err))
    }
  
        if (authentication.redirectTo) { 
          return <Redirect to={{pathname: authentication.redirectTo}}/> 
        } else  
            return(
          <div className="container-padding margin-top align-center">
          <h2>You must log in to view the page</h2>
          <form>
            <div className="flex-row flex-row-center space-evenly">
                <label>Username</label>
                <input name="username" className="admin-inputs border-secondary" value={authentication.username} onChange={handleChange}></input>
            </div>
            <div className="flex-row flex-row-center space-evenly">
                <label>Password</label>
                <input type="password" name="password" className="admin-inputs border-secondary" value={authentication.password} onChange={handleChange}></input>
            </div>
            <button className= "btn-primary btn-login" onClick={login} type="submit">Log in</button>
          </form>
        </div>
        )
  }

export default Login