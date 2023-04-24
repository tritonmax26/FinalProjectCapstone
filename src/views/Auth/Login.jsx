import React from 'react'
import http from '../../lib/http'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    async function login(e){
        e.preventDefault();
        if (!email || !password){
            alert("incorect data");
            return
        }
        // console.log("correct data");
        // console.log(name, email, password, passwordConfrimation)

        const res = await http.post("/login", {
            email: email,
            password: password,
            
        })

        localStorage.setItem("token", res.data.token);
        navigate("/mainpage")

        console.log (res)

    }


  return (
    <div>Login
        <form onSubmit={login}>
            <h2>Log in</h2>
            <h3>Email</h3>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}placeholder='email'/> 
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password'/>
            <input type="submit" value="Log In" />
        </form> 


    </div>
  )
}

export default Login