import React from 'react'
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, description, price, branch, image}) => {
  return (
  <div>   
       <div className='productDivContainer p-2 gap-1 '>
           <Card className='zoomeffect' style={{ width: '15rem'}}>
           <Card.Img variant="top" src={`${import.meta.env.VITE_API}/image/${image}`} />
             <Card.Body className='productCard centerAll'>
                    
                <Card.Title>Branch: {branch}</Card.Title>
                <Card.Subtitle className="mb-2 ">
                <Link className='unlink ' to={`/products/${id}`}>
                     Product Name: {name}
                </Link>                        
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 ">
                    Description: {description}                    
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 ">
                    Price: {price}
                </Card.Subtitle>
                {/* <Card.Text>
                    <Link className='unlink' to={`/products/${id}`}> ID: {id}</Link>
                </Card.Text>          */}
            </Card.Body>
           </Card>
         </div> 
    </div> 
  )
}

export default ProductCard