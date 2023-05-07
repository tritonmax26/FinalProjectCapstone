import React, { useState, useEffect } from 'react'
import http from '../lib/http'
import { useNavigate} from 'react-router-dom'
import Shops from ".././views/Shops"

const Mainpage = () => {
    const [loggedIn, setLoggedin] = useState(localStorage.getItem("token"))
    const [name,setName] = useState('')
    const [service,setService] = useState('')
    const [branch,setBranch] = useState('')
    const [about,setAbout] = useState('')
    const navigate = useNavigate()

    async function createShop(e) {
        e.preventDefault()
        if (!name || !service || !branch || !about) {
            alert ("Please Fill all tabs")
            return
        }

        const res = await http.post("/shops", {
            name: name,
            service: service,
            branch: branch,
            about: about
        },
        {
            headers : {
                "Authorization": `Bearer ${loggedIn}`
            }
        }
        )              
        
    }
       

    async function logout(){
        await http.post("/logout", null, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}` 
            }
        })

        localStorage.removeItem('token')
        setLoggedin(false)
        navigate("/")        
    }

    // console.log(loggedIn)


  return (
    <div>Mainpage
        <button onClick={logout}>
            Logged out
        </button>

        {loggedIn && (
            <form onSubmit={createShop}>
                <input type="text" value={name} placeholder='shop' onChange={(e)=> setName(e.target.value)}/>
                <input type="text" value={branch} placeholder='branch' onChange={(e)=> setBranch(e.target.value)}/>
                <input type="text" value={service} placeholder='service' onChange={(e)=> setService(e.target.value)}/>
                <input type="text" value={about} placeholder='about' onChange={(e)=> setAbout(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        )}

        <Shops />

    </div>
  )
}

export default Mainpage

// name
// description
// price
// branch