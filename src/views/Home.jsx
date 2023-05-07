import Loginpage from '../components/Loginpage'
import NavbarMain from '../components/NavbarMain';

const Home = () => {
  return (
    <div> 
        {/* <NavbarMain />                      */}
        <h4 className='text-center'>
        Inventory Portal
        </h4>
        <Loginpage />        
    </div>
  )
}

export default Home