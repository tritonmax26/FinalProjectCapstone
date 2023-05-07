import React from 'react'
import {Nav , Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand  as={Link} to="/">S.A.P. Stocks & Holdings Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search" >Search</Nav.Link>
            <Nav.Link as={Link} to="/login" >Log In</Nav.Link>            
            <Nav.Link as={Link} to="/register">Register</Nav.Link>        
          </Nav>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarMain