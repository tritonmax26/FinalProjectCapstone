import Home from "./views/Home"
import Loginpage from './components/Loginpage'
import Productspage from "./components/Productspage"
import Products from "./views/Products"
import Product from "./views/Products/Product"
import Register from "./views/Auth/Register"
import Login from "./views/Auth/Login"
import Mainpage from "./components/Mainpage"
import Shops from "./views/Shops"
import Shop from "./views/Shops/Shop"

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
    path: "/shop/products",
    element: <Productspage />
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
  {
    path: "/shops",
    element: <Shops />
  },
  {
    path: "/shops/:id",
    element: <Shop />
  },
  {
    path: "/shop/products",
    element: <Products />
  },
  {
    path: "/shop/products/:id",
    element: <Product />
  },



]

export default routes