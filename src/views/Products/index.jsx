import React from 'react'
import './../../index.css'
import { useState, useEffect } from 'react'
import http from '../../lib/http'
import { Container, Form, Button } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard'
import ProductsPagination from '../../components/ProductsPagination'
import NavbarMain from '../../components/NavbarMain'
import CopyRights from '../../components/CopyRights'

const index = () => {

  const [products, setProducts] = useState([])
  const [meta, setMeta] = useState({})
  const [searchProduct, setSearchProduct] = useState("")
  const [order, setOrder] = useState("desc")

  async function getProducts(page=1){
      const url = `/products/search?page=${page}&term=${searchProduct}&order=${order}`
      const res = await http.get(url)
      setProducts(res.data.data)
      setMeta(res.data.meta)  
      // console.log(res.data.meta)
  }

  async function search(e){
    e.preventDefault()
    console.log(searchProduct, order)
    getProducts(1)
  }

  useEffect (()=>{        
    getProducts();
    return
}, [])



  return (
    <div>
    <div className='centertext'> 
    <h3 className='span28'>Our Products Page</h3>         
        <Container className='productoverlay'>              
          <Form onSubmit={search}>          
          <Form.Group className="mb-3 span27" controlId="formBasicEmail">            
            <Form.Label>Search a Product</Form.Label>
            <Form.Control type="text" placeholder="Enter product Name" value={searchProduct} onChange={(e)=> setSearchProduct (e.target.value)}/>
            <Form.Text>
            <p className='span26'>Please wait for the page to load.</p>
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 span26">
            <Form.Check
              inline
              label="Latest"
              name="order"
              type = "radio"
              id="desc"
              value={order}
              onChange= {(e) => setOrder(e.target.id)}
            >
            </Form.Check>
            <Form.Check
              inline
              label="Oldest"
              name="order"
              type = "radio"
              id="asc"
              value={order}
              onChange= {(e) => setOrder(e.target.id)}
            >
            </Form.Check>
          </Form.Group>
          <Form.Group>
            <Button className='span26' variant="primary" type="submit ">Search</Button>
          </Form.Group>
          </Form>
        </Container>
    </div>

      <div className='centertext'>
      <h1 className='span28'>Products Available</h1>
      <Container > 
          {products.map((product,index) => {    
              return(
                <div className='productDivContainer' key={index}>
                  <ProductCard id={product.id} name={product.name} description={product.description} price={product.price} branch={product.branch} image={product.image} />
                </div>  
            )
            })}
      </Container>       
      <Container >         
            {
              meta.links && <ProductsPagination  links={meta.links} active={meta.current_page} getProducts={getProducts}/>
            }       
      </Container> 
      </div>
           
    </div>
  )
}

export default index