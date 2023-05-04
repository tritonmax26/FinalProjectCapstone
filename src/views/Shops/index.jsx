import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import http from '../../lib/http'
import { Container, Card} from 'react-bootstrap';

const Shops = () => {

  const [shops, setShops] = useState([])

  async function getShops(){
      const res = await http.get ("/shops")
      setShops(res.data)
      // console.log(res.data)
  }

  useEffect (()=>{        
    getShops();
    return
}, [])



  return (
    <div>
      {shops.map((shop,index) => {      
          return(
                <div key={index}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Branch: {shop.branch}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                      <Link to={`/shops/${shop.id}`}> Name: {shop.name}</Link>                        
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">Data:</Card.Subtitle>
                      <Card.Text>
                        <Link to={`/shops/${shop.id}`}> ID: {shop.id}</Link>
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

export default Shops