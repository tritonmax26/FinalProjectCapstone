// import http from "./lib/http"
// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"
import { Container} from 'react-bootstrap';


function App() {
 
  return (
   <div className="bgfull ">
   <>
        
            <Routes>
            {routes.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} exact />
            })}
            </Routes>

    </>
    </div>
  )
}

export default App
