import React from 'react'
import http from '../../lib/http'
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import ProductsPage from '../../components/Productspage';


const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);

async function getShops(){
      const res = await http.get (`/shops/${id}`)
      setShops(res.data.products)
      console.log(res.data.products)
}
  useEffect (()=>{        
    getShops();
    return
}, [])

  return (

    <div>
      Per products per shop query
      <ProductsPage productid ={id} />
      {shops.map((shop,index) => {      
       return(
        <div>
            <h1>{shop.name}</h1>
            <div className='productDivContainer'>
              <Card style={{ width: '18rem' }} >
              <img src={`${import.meta.env.VITE_API}/image/${shop.image}`} alt="" />
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
                <Link to={`/products/${id}`}>Check Item </Link>          
                </Card.Body>
                </Card>                    
            </div>  
          </div>
          )
      })}     
    
    </div>
  )
}

export default index