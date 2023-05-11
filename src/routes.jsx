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
import ProductsPerShop from "./views/ProductsPerShop"
import Layout from "../src/layout"


const routes = [

  {
    path: "/*",
    element: <Layout />,
    children: [
      {
        path: "/mainpage",
        element: <Mainpage />
      },
      {
        path: "/loginpage",
        element: <Loginpage />
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
        path: "/shoppage",
        element: <ShopsPage />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/shop/products/:id",
        element: <ProductsPerShop />
      },
      {
        path: "/productspage",
        element: <Productspage/>
      },
    
      {
        path: "/products/:id",
        element: <Product />
      },
      {
        path: "/search",
        element: <Search />
      }, 
      
    ]
  },
  {
    path: "/",
    element: <Home />
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

]


export default routes