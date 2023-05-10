import React from 'react'
import {Nav , Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CopyRights = () => {
  return (
    <footer>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='span28'>&copy; S.A.P. Stocks & Holdings Inventory Data, All rights Reserved</Navbar.Brand>
      </Container>
    </Navbar>


    </footer>
  )
}

export default CopyRights