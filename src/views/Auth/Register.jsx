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
            alert("Incorect Data, please make sure you input the right data");
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
    <div className='spancontainer container d-flex align-items-center justify-content-center'>
        <form onSubmit={register} className='registeroverlay'>
            <h4 className='text-center span28'>Application Details</h4>
            <h6 className='mt-4 span27'>Name</h6>
            <input type="text" className='mb-4' value={name} onChange={(e)=> setName(e.target.value)} placeholder='name' /> 
            <h6 className='span27'>Email</h6>
            <input type="email" className='mb-4' value={email} onChange={(e)=> setEmail(e.target.value)}placeholder='email'/> 
            {/* <h6>Address</h6>
            <input type="text" className='mb-4' placeholder='address'/> 
            <h6>Zip Code</h6>
            <input type="text" className='mb-4' placeholder='zip code'/> 
            <h6>Contact No.</h6>
            <input type="tel" className='mb-4' placeholder='contact #'/>  */}
            <h6 className='span27'>Password</h6>
            <input type="password" className='mb-4' value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password'/>
            <h6 className='span27'>Confirm Password</h6> 
            <input type="password" className='mb-4' value={passwordConfrimation} onChange={(e)=> setPassworConfirmation(e.target.value)}placeholder='confirm password'/>
            <br></br><input type="submit" class="btn btn-dark buttonhover span26" value="Register!" />
        </form> 
    </div>
  )
}

export default Register