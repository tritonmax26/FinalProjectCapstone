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
    <div className='  spancontainer container d-flex align-items-center justify-content-center'>
        <form onSubmit={login} className='loginoverlay'>
            <h2 className='mt-4 text-center span28'>Log In Portal</h2>
            <h5 className='mt-4 span27'>Email</h5>
            <input type="email" className='mb-4' value={email} onChange={(e)=> setEmail(e.target.value)}placeholder='email'/> 
            <h5 className='span27'>Password</h5>
            <input type="password" className='mb-4' value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password'/>
            <br></br><input type="submit" class="btn btn-dark buttonhover span27" value="Sign In!" />
        </form> 


    </div>
  )
}

export default Login