import React from 'react'
import NavbarMain from '../components/NavbarMain'
import CopyRights from '../components/CopyRights'
import { Routes, Route } from 'react-router-dom'
import routes from '../routes'


const index = () => {
  return (
        <>
            <NavbarMain />
            <Routes>
            {routes[0].children.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} exact />
            })}
            </Routes>
            <CopyRights />
        </>
  )
}

export default index
