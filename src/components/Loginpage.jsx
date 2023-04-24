import React from 'react';
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'




const Loginpage = () => {



  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome to our Website</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, perspiciatis?</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Lorem ipsum dolor sit amet.</Card.Subtitle>
        <Card.Text>
        Please do Log in or Register
        </Card.Text>
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Loginpage