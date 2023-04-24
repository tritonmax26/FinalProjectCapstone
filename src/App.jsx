// import http from "./lib/http"
// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"


function App() {
 
  return (
    <>
        <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
        </Routes>
    </>
  )
}

export default App
