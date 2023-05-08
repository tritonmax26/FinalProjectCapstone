import React from 'react'
import http from '../../lib/http'
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shop, setShop] = useState({});

async function getShop(){
      const res = await http.get (`/shops/${id}`)
      setShop(res.data.products)
      console.log(res.data.products)
}
  useEffect (()=>{        
    getShop();
    return
}, [])

  return (

    <div>
      Per shop per product query
      <h1>{shop.name}</h1>
      <Card style={{ width: '18rem' }} >
        {/* <img src={`${import.meta.env.VITE_API}/image/${shop.image}`} alt="" /> */}
        <Card.Body>
          <Card.Title>Branch: {shop.branch}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name: {shop.name}                   
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Price: {shop.price}</Card.Subtitle>
          <Card.Text>
             Description: {shop.decription}
          </Card.Text>
          {/* <button onClick={Productspage}>
            Check Product
          </button> */}
          <Link to= "/products" >Check Item </Link>          
        </Card.Body>
      </Card>      
    </div>
  )
}

export default index