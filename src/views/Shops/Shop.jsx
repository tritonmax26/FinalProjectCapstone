import React from 'react'
import http from '../../lib/http'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavbarMain from '../../components/NavbarMain';
import CopyRights from '../../components/CopyRights';


const Shop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shop, setShop] = useState({});
  const [onEdit, setOnEdit] = useState(false);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [branch, setBranch] = useState('');
  const [about, setAbout] = useState('');
  // const [shopImage,setShopImage] =  useState ();

  async function getShop() {
    const res = await http.get(`/shops/${id}`)
    setShop(res.data)
    console.log(res.data.products)
  }

  async function updateShop(e) {
    e.preventDefault()
    const res = await http.put(`/shops/${id}`, {
      name: name ? name : shop.name,
      service: service ? service : shop.service,
      branch: branch ? branch : shop.branch,
      about: about ? about : shop.about
    },
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
    setShop(res.data)
    setOnEdit(false)
  }

  async function deleteItem(e) {

    await http.delete(`/shops/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
    navigate("/mainpage")
  }

  // async function getImage () {
  //   const res = await http.get(`/image/${shop.image}`)
  //   console.log (res)
  //   setShopImage(res.data)
  // }


  // useEffect (()=>{        
  //   getImage();
  //   return
  //   }, [shop])



  useEffect(() => {
    getShop();
    return
  }, [])

  return (
    <div className='spancontainer'>
      <span className='container d-flex align-items-center justify-content-center span26'>Individual Shop Query</span>
      <h1 className='container d-flex align-items-center justify-content-center span28'>{shop.name}</h1>
      <Card className='container d-flex align-items-center justify-content-center' style={{ width: '18rem' }} >
        <Card.Img src={`${import.meta.env.VITE_API}/image/${shop.image}`} alt="" />
        <Card.Body>
          <Card.Title>Branch: {shop.branch}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Name: {shop.name}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Data: </Card.Subtitle>
          <Card.Text>
            About: {shop.about}
          </Card.Text>
          {/* <button onClick={Productspage}>
            Check Product
          </button> */}
          <Link className='unlink' to={`/shop/products/${id}`} >Check Products </Link>
        </Card.Body>
      </Card>

      <div className='container d-flex align-items-center justify-content-center'>
        <Link className='unlink px-2 mr-2 btn btn-primary span26' to="/shops">Back</Link>
        <button className='mr-2 btn btn-success span26' onClick={() => setOnEdit(!onEdit)}>
          Edit Content
        </button>
        <button className='btn btn-danger span26' onClick={deleteItem}>
          Delete Item
        </button>
      </div>
      {
        onEdit &&
        (
          <div className='container d-flex align-items-center justify-content-center'>
            <form onSubmit={updateShop}>
              <h1 className='d-flex align-items-center justify-content-center span28'>Update Shop</h1>
              <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
              <input type="text" value={service} placeholder='service' onChange={(e) => setService(e.target.value)} />
              <input type="text" value={branch} placeholder='branch' onChange={(e) => setBranch(e.target.value)} />
              <input type="text" value={about} placeholder='about' onChange={(e) => setAbout(e.target.value)} />
              <input className='ml-2 btn btn-dark span26' type="submit" value="Update Shop" />
            </form>
          </div>

        )
      }
    </div>
  )
}

export default Shop