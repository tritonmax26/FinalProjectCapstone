import Home from "./views/Home"
import Loginpage from './components/Loginpage'
import Productspage from "./components/Productspage"
import Products from "./views/Products"
import Product from "./views/Products/Product"
import Register from "./views/Auth/Register"
import Login from "./views/Auth/Login"
import Logout from "./views/Auth/Logout"
import ShopsPage from "./components/ShopsPage"
import Shops from "./views/Shops"
import Shop from "./views/Shops/Shop"
import Search from "./views/Search"
import Mainpage from "./views/Mainpage"


const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mainpage",
    element: <Mainpage />
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
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/shopspage",
    element: <ShopsPage />
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
    path: "/products",
    element: <Products />
  },
  {
    path: "/shop/products",
    element: <Products />
  },
  {
    path: "/shop/products/:id",
    element: <Product />
  },
  {
    path: "/search",
    element: <Search />
  },




]

export default routes