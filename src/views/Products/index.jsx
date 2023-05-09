import React from 'react'
import { useState, useEffect } from 'react'
import http from '../../lib/http'
import { Container, Form, Button } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard'
import ProductsPagination from '../../components/ProductsPagination'
import NavbarMain from '../../components/NavbarMain'

const index = () => {

  const [products, setProducts] = useState([])
  const [meta, setMeta] = useState({})
  const [searchProduct, setSearchProduct] = useState("")
  const [order, setOrder] = useState("desc")

  async function getProducts(page=1){
      const url = `/products?page=${page}&term=${searchProduct}&order=${order}`
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
      <NavbarMain />

      <Container>
      <Form onSubmit={search}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search for a Product</Form.Label>
        <Form.Control type="text" placeholder="Enter Shop Name" value={searchProduct} onChange={(e)=> setSearchProduct (e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          inline
          label="Lastest"
          name="order"
          type = "radio"
          id="asc"
          value={order}
          onChange= {(e) => setOrder(e.target.id)}
        >
        </Form.Check>
        <Form.Check
          inline
          label="Oldest"
          name="order"
          type = "radio"
          id="desc"
          value={order}
          onChange= {(e) => setOrder(e.target.id)}
        >
        </Form.Check>
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit ">Search</Button>
      </Form.Group>

      </Form>     


      </Container>


      <div className='centerAll'>
        <h1>Products Available</h1>
      <Container > 
          {products.map((product,index) => {    
              return(
                <div className='productDivContainer' key={index}>
                  <ProductCard id={product.id} name={product.name} description={product.description} price={product.price} branch={product.branch} image={product.image} />
                </div>  
            )
            })}
              
            {
              meta.links && <ProductsPagination  links={meta.links} active={meta.current_page} getProducts={getProducts}/>
            }       
      </Container> 
      </div>      
    </div>
  )
}

export default index