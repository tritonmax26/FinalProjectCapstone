import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import http from '../../lib/http'

const  Mainpage = () => {

    const { id } = useParams();
    const [ shop, setShop] = useState();

    async function getShop() {
        const res = await http.get(`/shops/${id}`)
        setShop(res.data)
        console.log  (res.data)
    }

    useEffect (() => {

    getShop()

    return

    },[])


  return (
    <div>
        <h1>Mainpage</h1>
    </div>
  )
}
  export default Mainpage