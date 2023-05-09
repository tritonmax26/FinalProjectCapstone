import React from 'react'
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, description, price, branch, image}) => {
  return (
       <div className='productDivContainer p-2 gap-1'>
           <Card style={{ width: '20rem' }} className='centerAll'>
           <img src={`${import.meta.env.VITE_API}/image/${image}`} alt="" />
             <Card.Body className='productCard centerAll '>
                    
                <Card.Title>Branch: {branch}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                <Link className='unlink' to={`/products/${id}`}>
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
                    <Link className='unlink' to={`/products/${id}`}> ID: {id}</Link>
                </Card.Text>
                {/* <Card.Link href="#">order</Card.Link>
                <Card.Link href="#">cancel</Card.Link> */}
            </Card.Body>
           </Card>
         </div>  
  )
}

export default ProductCard