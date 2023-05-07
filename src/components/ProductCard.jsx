import React from 'react'
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, description, price, branch, image}) => {
  return (
       <div className='productDivContainer p-2 gap-1'>
           <Card style={{ width: '20rem' }} className='centerAll'>
             <Card.Body className='productCard centerAll '>
                    <div>
                    {image}
                    </div>
                <Card.Title>Branch: {branch}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                <Link to={`/shop/products/${id}`}>
                     Product Name: {name}
                </Link>                        
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    Description: {description}                    
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    Price: {price}
                </Card.Subtitle>
                <Card.Text>
                    <Link to={`/shop/products/`}> ID: {id}</Link>
                </Card.Text>
                {/* <Card.Link href="#">order</Card.Link>
                <Card.Link href="#">cancel</Card.Link> */}
            </Card.Body>
           </Card>
         </div>  
  )
}

export default ProductCard