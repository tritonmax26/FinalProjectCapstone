import React from 'react'
import http from '../../lib/http'
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavbarMain from '../../components/NavbarMain';
import CopyRights from '../../components/CopyRights';


const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [branch,setBranch] = useState('');
  const [image, setImage] = useState();

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
        branch: branch ? branch : product.branch,
        // image: image ? image : uploadRes ? uploadRes.data.image_name : "",
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
    navigate(`/shop/products/${id}`)
  }


  useEffect (()=>{        
    getProduct();
    return
}, [])

  return (
    <div className='spancontainer '> 

      <span className='container d-flex align-items-center justify-content-center span26 '>Products Link</span>
      <h1 className='container  d-flex align-items-center justify-content-center span28 '>{product.name}</h1>
      <Card className='container d-flex align-items-center justify-content-center' style={{ width: '18rem' }}>
      <Card.Img src={`${import.meta.env.VITE_API}/image/${product.image}`} alt="" />
        <Card.Body clas>
          <Card.Title>Branch: {product.branch}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name: {product.name}                   
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Price: {product.price}</Card.Subtitle>
          <Card.Text>
             Trial for for product
          </Card.Text>
          <Card.Link className='unlink btn btn-primary span26' href="#">order</Card.Link>
          <Card.Link className='unlink btn btn-primary span26' href="#">cancel</Card.Link>
        </Card.Body>
      </Card>
      <div className='mt-2 container d-flex align-items-center justify-content-center'>
      <Link className='unlink px-2 mr-2 btn btn-primary span26' to={`/shops/${id}`}>Back</Link>
      <button className='mr-2 btn btn-success span26' onClick = {() => setOnEdit(!onEdit)}>
        Edit Content
      </button>
      <button className='btn btn-danger span26' onClick = {deleteItem}>
        Delete Item
      </button>
      </div>
      {
        onEdit &&
        (
          <div className='container d-flex align-items-center justify-content-center'>
            <form onSubmit={updateProduct}>
              <h1 className='d-flex align-items-center justify-content-center span28'>Update Post</h1>
            <input type="text" value={name} placeholder='name' onChange={(e)=> setName(e.target.value)}/>
            <input type="text" value={description} placeholder='description' onChange={(e)=> setDescription(e.target.value)}/>
            <input type="number" value={price} placeholder='price' onChange={(e)=> setPrice(e.target.value)}/>
            <input type="text" value={branch} placeholder='branch' onChange={(e)=> setBranch(e.target.value)}/>
            
            {/* <input type="file" value={image} placeholder='image' onChange={(e)=> setImage(e.target.files[0])}/> */}

            <input className='ml-2 btn btn-primary span26' type="submit" value="Update Post" />

            </form>
          </div>

        )
      }
    </div>
  )
}

export default Product