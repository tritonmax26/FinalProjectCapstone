import React from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ShopCard = ({id, name, branch, service, about, name2 ,image}) => {
  return (
    <div>      
        <div className='shopDivContainer  p-2 gap-1'>
            <Card className='zoomeffect' style={{ width: '15rem' }}>
            <Card.Img variant="top" src={`${import.meta.env.VITE_API}/image/${image}`} />
                <Card.Body className='productCard centerAll'>
                  
                    <Card.Title>Branch: {branch}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                    <Link className='unlink' to={`/shops/${id}`}> 
                      Shop Name: {name}
                    </Link>                        
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Created by: {name2}</Card.Subtitle>
                    <Card.Text>
                      Service: {service}
                    </Card.Text>
                    <Card.Text>
                      About: {about}
                    </Card.Text>                        
                </Card.Body>
            </Card>
        </div>  
    </div>
  )
}

export default ShopCard