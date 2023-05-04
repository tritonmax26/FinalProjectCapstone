import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import http from '../../lib/http'
import { Container, Card} from 'react-bootstrap';

const Products = () => {

  const [products, setProducts] = useState([])

  async function getProducts(){
      const res = await http.get ("/products")
      setProducts(res.data)
      // console.log(res.data)
  }

  useEffect (()=>{        
    getProducts();
    return
}, [])



  return (
    <div>
      {products.map((product,index) => {      
          return(
                <div key={index}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Branch: {product.branch}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                      <Link to={`/shop/products/${product.id}`}> Name: {product.name}</Link>                        
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Price: {product.price}</Card.Subtitle>
                      <Card.Text>
                        <Link to={`/shop/products`}> ID: {product.id}</Link>
                      </Card.Text>
                      {/* <Card.Link href="#">order</Card.Link>
                      <Card.Link href="#">cancel</Card.Link> */}
                    </Card.Body>
                  </Card>
                </div>    
              )
            })}
    </div>
  )
}

export default Products