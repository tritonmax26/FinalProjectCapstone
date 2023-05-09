import React from 'react'
import {Nav , Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='span28' as={Link} to="/">S.A.P. Stocks & Holdings Inventory Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="mr-auto span26">
            <Nav.Link as={Link} to="/mainpage">Home</Nav.Link>
            <Nav.Link as={Link} to="/shoppage" >Create Shops</Nav.Link>     
            <NavDropdown title="Search" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/shops">Shops</NavDropdown.Item>              
              <NavDropdown.Item as={Link} to="/products">Product</NavDropdown.Item>   
            </NavDropdown>
            <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>        
          </Nav>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarMain