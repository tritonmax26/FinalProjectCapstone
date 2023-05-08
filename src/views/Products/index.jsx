import React from 'react'
import { useState, useEffect } from 'react'
import http from '../../lib/http'
import { Container } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard'
import ProductsPagination from '../../components/ProductsPagination'

const Products = () => {

  const [products, setProducts] = useState([])
  const [meta, setMeta] = useState({})

  async function getProducts(page=1){
      const url = `/products?page=${page}`
      const res = await http.get(url)
      setProducts(res.data.data)
      setMeta(res.data.meta)  
      console.log(res.data.meta)
  }

  useEffect (()=>{        
    getProducts();
    return
}, [])



  return (
    <div>
      <div className='centerAll'>
      <Container>      
          {products.map((product,index) => {    
              return(
                <div className='productDivContainer'>
                  <ProductCard key={index} id={product.id} name={product.name} description={product.description} price={product.price} branch={product.branch} image={product.image} />
                </div>  
            )
            })}
              
          {
              meta.links && <ProductsPagination links={meta.links} active={meta.current_page} getProducts={getProducts}/>
            }       
      </Container> 
      </div>      
    </div>
  )
}

export default Products