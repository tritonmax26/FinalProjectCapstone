import React from 'react'
import {Nav , Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CopyRights = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='span28' as={Link} to="/">&copy; S.A.P. Stocks & Holdings Inventory Data, All rights reserved</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">  
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default CopyRights