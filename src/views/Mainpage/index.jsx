import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import http from '../../lib/http'
import Shops from '../Shops'
import NavbarMain from '../../components/NavbarMain'

const  Mainpage = () => {

  return (
    <div>
        <NavbarMain/>
        <Shops/>
    </div>
  )
}
  export default Mainpage