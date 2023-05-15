import React from 'react'
import http from '../../lib/http'
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import ProductsPage from '../../components/Productspage';
import NavbarMain from '../../components/NavbarMain';
import CopyRights from '../../components/CopyRights';


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
    <div className='spancontainer container centertext'>
      <span className='span26'>Per products per shop query </span>
      <ProductsPage productid ={id} />
      {shops.map((shop,index) => {      
       return(
        <div key={index} className='shopDivContainer p-3'>
            
            <div>
              <Card className='container d-flex align-items-center justify-content-center' style={{ width: '18rem' }}  >
              <Card.Img src={`${import.meta.env.VITE_API}/image/${shop.image}`} alt="" />
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
                <Link className='unlink btn btn-warning' to={`/products/${shop.id}`}>Check Item </Link>          
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