import React from 'react'
import Home from '../Home'

const Logout = () => {

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
  return (
    <div className='spancontainer'>
        <Home />
    </div>
  )
}

export default Logout