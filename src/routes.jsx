import Home from "./views/Home"
import Loginpage from './components/Loginpage'
import Productspage from "./views/Productspage"
import Products from "./views/Products"
import Product from "./views/Products/Product"
import Register from "./views/Auth/Register"
import Login from "./views/Auth/Login"
import Mainpage from "./components/Mainpage"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/loginpage",
    element: <Loginpage />
  },
  {
    path: "/productspage",
    element: <Productspage />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/:id",
    element: <Product />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/mainpage",
    element: <Mainpage />
  },



]

export default routes