import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'





const Loginpage = () => {



  return (
    <div>
        
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome to S.A.P. Stocks & Holdings Inc.</Card.Title>
        <Card.Subtitle className="mb-4 text-muted">Few updates has been made, new patches has been implemented. </Card.Subtitle>
        <Card.Subtitle className="mb-2 fontblack">Existing or New User?</Card.Subtitle>
        <Card.Text>
        Please Log in or register to Signup
        </Card.Text>
        <div className="block border-2 mb-2 px-2"><Button variant="primary" className='buttonhover'><Link to="/login" className='fontwhite'>Log in </Link></Button> </div> 
        <div className="block border-2 mb-2 px-2"><Button variant="primary" className='buttonhover'><Link to="/register" className='fontwhite'> Signup</Link></Button> </div> 
      </Card.Body>
    </Card>

    </div>
  )
}

export default Loginpage