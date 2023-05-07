import React, { useState, useEffect } from 'react'
import http from '../lib/http'
import { useNavigate} from 'react-router-dom'
// import Products from "../views/Products"
import { Link } from 'react-router-dom'

const Productspage = () => {
    const [loggedIn, setLoggedin] = useState(localStorage.getItem("token"))
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [branch,setBranch] = useState('')
    const navigate = useNavigate()

    async function createProduct(e) {
        e.preventDefault()
        if (!name || !description || !price || !branch) {
            alert ("Please Fill all tabs")
            return
        }

        const res = await http.post("/products", {
            name: name,
            description: description,
            price: price,
            branch: branch
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
    <div>
        <Link to="/mainpage">Back</Link>
        Products Page
        <button onClick={logout}>
            Logged out
        </button>

        {loggedIn && (
            <form onSubmit={createProduct}>
                <input type="text" value={name} placeholder='product' onChange={(e)=> setName(e.target.value)}/>
                <input type="text" value={description} placeholder='description' onChange={(e)=> setDescription(e.target.value)}/>
                <input type="number" value={price} placeholder='price' onChange={(e)=> setPrice(e.target.value)}/>
                <input type="text" value={branch} placeholder='branch' onChange={(e)=> setBranch(e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        )}

        <div>
            <Products />

        </div>

    </div>
  )
}

export default Productspage

// name
// description
// price
// branch