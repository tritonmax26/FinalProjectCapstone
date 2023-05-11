import React from 'react'
import {Nav , Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CopyRights = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='span28'>&copy; S.S.P. Stocks & Holdings Inventory Data, All rights reserved</Navbar.Brand>
      </Container>
    </Navbar>


    </div>
  )
}

export default CopyRights