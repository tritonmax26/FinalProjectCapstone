import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Cargo from '../imgdata/cargoplane.mp4';




const Loginpage = () => {



  return (
    <div>
    <div className='container d-flex  justify-content-center' >
    <div > <video className='video1' src={Cargo} autoPlay loop />
    <div className='spancontainer container d-flex  justify-content-center' >
    <div><p className=' text-center span28'>Inventory Portal</p> 
    <Card style={{ width: '18rem' }}>  
      <Card.Body>
        <Card.Title>Welcome to S.S.P. Stocks & Holdings Inc.</Card.Title>
        <Card.Subtitle className="mb-4 text-muted">Few updates has been made, new patches has been implemented. </Card.Subtitle>
        <Card.Subtitle className="mb-2 fontblack">Existing or New User?</Card.Subtitle>
        <Card.Text>
        Please Log in or register to Signup
        </Card.Text>
        <div className="block border-2 mb-2 px-2"><Button variant="dark" className='buttonhover'><Link to="/login" className='fontwhite span26'>Log in </Link></Button> </div> 
        <div className="block border-2 mb-2 px-2"><Button variant="dark" className='buttonhover'><Link to="/register" className='fontwhite span26'> Signup</Link></Button> </div> 
      </Card.Body>
    </Card>
    </div>

    </div>

    </div>
    
    </div>

    </div>
    
  )
}

export default Loginpage