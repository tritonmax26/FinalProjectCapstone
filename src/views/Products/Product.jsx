import React from 'react'
import http from '../../lib/http'
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [branch,setBranch] = useState('');

async function getProduct(){
      const res = await http.get (`/products/${id}`)
      setProduct(res.data)
      console.log(res)
}

async function updateProduct(e) {
    e.preventDefault()
     const res = await http.put(`/products/${id}`, {
        name: name ? name : product.name,
        description: description ? description : product.description,
        price: price ? price : product.price,
        branch: branch ? branch : product.branch
      },
      {
          headers : {
              "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
      }
      ) 
  setProduct(res.data)
  setOnEdit(false)
  } 

  async function deleteItem(e) {

    await http.delete(`/products/${id}`,
    {
        headers : {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }
    )
    navigate("/")
  }


  useEffect (()=>{        
    getProduct();
    return
}, [])

  return (

    <div>
      <div>
      <Link to="/shop/products">Back</Link>
      <button onClick = {() => setOnEdit(!onEdit)}>
        Edit Content
      </button>
      <button onClick = {deleteItem}>
        Delete Item
      </button>
      </div>
      {
        onEdit &&
        (
          <div>
            <form onSubmit={updateProduct}>
              <h1>Update Post</h1>
            <input type="text" value={name} placeholder='name' onChange={(e)=> setName(e.target.value)}/>
            <input type="text" value={description} placeholder='description' onChange={(e)=> setDescription(e.target.value)}/>
            <input type="number" value={price} placeholder='price' onChange={(e)=> setPrice(e.target.value)}/>
            <input type="text" value={branch} placeholder='branch' onChange={(e)=> setBranch(e.target.value)}/>
            <input type="submit" value="Update Post" />              
            </form>
          </div>

        )
      }


      
      Products2 Link
      <h1>{product.name}</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Branch: {product.branch}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name: {product.name}                   
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Price: {product.price}</Card.Subtitle>
          <Card.Text>
             Trial for for product
          </Card.Text>
          <Card.Link href="#">order</Card.Link>
          <Card.Link href="#">cancel</Card.Link>
        </Card.Body>
      </Card>

      
    </div>
  )
}

export default Product