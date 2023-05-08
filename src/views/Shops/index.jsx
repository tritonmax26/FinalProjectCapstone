import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import http from '../../lib/http'
import ShopCard from '../../components/ShopCard'
import ShopsPagination from '../../components/ShopsPagination'
import NavbarMain from '../../components/NavbarMain'

const Shops = () => {

  const [shops, setShops] = useState([])  
  const [meta, setMeta] = useState({})


async function getShops(page=1){
  const url = `/shops?page=${page}`
  const res = await http.get(url)      
  setShops(res.data.data)
  setMeta(res.data.meta)  
  console.log(res.data.data)

}

useEffect (()=>{        
getShops();
return
}, [])



  return (
    <div>
      <NavbarMain />
      <div className='centerAll '>
        <Container >
          {shops.map((shop,index) => {      
              return(

                    <div className='shopDivContainer'>
                      <ShopCard key={index} id={shop.id} name={shop.name} branch={shop.branch} service={shop.service} about={shop.about} image={shop.image} name2={shop.user.name}/>
                    </div>

                  )
                })}
          {
            meta.links && <ShopsPagination  links={meta.links} active={meta.current_page} getShops={getShops}/>
          }
      </Container>
      </div>
    </div>
  )
}

export default Shops