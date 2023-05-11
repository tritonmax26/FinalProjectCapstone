import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Form, Button} from 'react-bootstrap';
import http from '../../lib/http'
import ShopCard from '../../components/ShopCard'
import ShopsPagination from '../../components/ShopsPagination'
import NavbarMain from '../../components/NavbarMain'
import CopyRights from '../../components/CopyRights'

const Shops = () => {

  const [shops, setShops] = useState([])  
  const [meta, setMeta] = useState({})
  const [searchShop, setSearchShop] = useState("")
  const [order, setOrder] = useState("desc")

async function getShops(page=1){
  const url = `/shops/search?page=${page}&term=${searchShop}&order=${order}`
  const res = await http.get(url)      
  setShops(res.data.data)
  setMeta(res.data.meta)  
  // console.log(res.data.data)

}

async function search(e){
  e.preventDefault()
  console.log(searchShop, order)
  getShops(1)
}

useEffect (()=>{        
getShops();
return
}, [])



  return (
    <div>
      <div className='centertext'>
      <h3 className='span28'>Our Shops Page</h3>  
          <Container className='productoverlay'>
          <Form onSubmit={search}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className=' span28'>Search for a shop.</Form.Label>
            <Form.Control type="text" placeholder="Enter Shop Name" value={searchShop} onChange={(e)=> setSearchShop (e.target.value)}/>
            <Form.Text className="text-muted">
            <span className='span26'> Please wait for the page to load</span>
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Check
              inline
              className='span26'
              label="Newest"
              name="order"
              type = "radio"
              id="desc"
              value={order}
              onChange= {(e) => setOrder(e.target.id)}
            >
            </Form.Check>
            <Form.Check
              inline
              className='span26'
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
      <h1 className='span28'>Shops Available</h1>  
        <Container >
          {shops.map((shop,index) => {      
              return(

                    <div className='shopDivContainer' key={index}>
                      <ShopCard  id={shop.id} name={shop.name} branch={shop.branch} service={shop.service} about={shop.about} image={shop.image} name2={shop.user.name}/>
                    </div>
                  )
                })}
        </Container> 
        <div className='centerAll'>       
            <Container >  
              {
                meta.links && <ShopsPagination  links={meta.links} active={meta.current_page} getShops={getShops}/>
              }
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Shops