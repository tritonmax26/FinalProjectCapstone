import React, { useState, useEffect } from 'react'
import http from '../lib/http'
import { useNavigate} from 'react-router-dom'
import Products from ".././views/Products"

const Mainpage = () => {
    const [loggedIn, setLoggedin] = useState(localStorage.getItem("token"))
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [location,setLocation] = useState('')
    const navigate = useNavigate()

    async function createProduct(e) {
        e.preventDefault()
        if (!name || !description || !price || !location) {
            alert ("Please Fill all tabs")
            return
        }

        const res = await http.post("/products", {
            name: name,
            description: description,
            price: price,
            location: location
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
            <form onSubmit={createProduct}>
                <input type="text" value={name} placeholder='name' onChange={(e)=> setName(e.target.value)}/>
                <input type="text" value={description} placeholder='description' onChange={(e)=> setDescription(e.target.value)}/>
                <input type="number" value={price} placeholder='price' onChange={(e)=> setPrice(e.target.value)}/>
                <input type="text" value={location} placeholder='location' onChange={(e)=> setLocation(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        )}

        <div>
            <Products />

        </div>

    </div>
  )
}

export default Mainpage

// name
// description
// price
// location