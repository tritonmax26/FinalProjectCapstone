import React from 'react'
import http from '../../lib/http'
import { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfrimation,setPassworConfirmation] = useState('')

    async function register(e){
        e.preventDefault();
        if (!name || !email || !password || !passwordConfrimation || !(password === passwordConfrimation)){
            alert("incorect data");
            return
        }
        // console.log("correct data");
        // console.log(name, email, password, passwordConfrimation)

        const res = await http.post("/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfrimation
        })

        localStorage.setItem("token", res.data.token);
        navigate("/mainpage")

        console.log (res)

    }


  return (
    <div>Register
        <form onSubmit={register}>
            <h3>Name</h3>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='name' /> 
            <h3>Email</h3>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}placeholder='email'/> 
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password'/>
            <h3>Confirm Password</h3> 
            <input type="password" value={passwordConfrimation} onChange={(e)=> setPassworConfirmation(e.target.value)}placeholder='confirm password'/>
            <input type="submit" value="Register" />
        </form> 
    </div>
  )
}

export default Register