import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Carousel, Button, Card } from 'react-bootstrap';
import http from '../../lib/http';
import Shops from '../Shops';
import NavbarMain from '../../components/NavbarMain';
import './mainpage.css';

const Mainpage = () => {
  const [shops, setShops] = useState([]) 


  async function getShops(){
    const res = await http.get('/shops')      
    setShops(res.data.data)
   console.log(res.data.data)
  
  }

  useEffect (()=>{        
    getShops();
    return
    }, [])

  return (
    <>
    {shops.map((shop,index)=>{
      return(
    <div key={index}>
      <Carousel className='carousel-body'>
        <Carousel.Item>
          <div className="carousel-item-container">
            <img
              className="d-block w-100"
              src="src/imgdata/stocks.jpg"
              alt="Image 1"
            />
            <div className="carousel-caption">
              <h3>Discover a world of endless possibilities</h3>
              <p>
                Browse, search, and find exactly what you're looking for with
                ease, whether it's rare collectibles, everyday essentials, or
                specialized equipment.
              </p>
              <Button variant="dark">Learn more  </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-container">
            <img
              className="d-block w-100"
              src="src/imgdata/inventory.jpg"
              alt="Image 2"
            />
            <div className="carousel-caption">
              <h3>Streamline your inventory management effortlessly</h3>
              <p>
                From tracking stock levels to monitoring sales trends, our
                platform provides you with the tools to optimize your business
                operations and stay one step ahead.
              </p>
              <Button variant="dark">Learn more  </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-container">
            <img
              className="d-block w-100"
              src="src/imgdata/holdings.jpg"
              alt="Image "
            />
            <div className="carousel-caption">
              <h3>Unlock the power of efficient inventory control</h3>
              <p>
                Say goodbye to manual counting and spreadsheet chaos. Our
                streamlined interface and automated features simplify inventory
                tasks, helping you save time, reduce errors, and increase
                productivity.
              </p>
              <Button variant="dark">Learn more  </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <h1 className="text-center mt-3 text-light texth1">Welcome! {shop.user.name}</h1>

      <h1 className="text-center mt-3 text-light texth1">Acknowledgements</h1>
      <p className="text-center text-light">We extend our sincere gratitude to the following individuals who have contributed to the success of this website:</p>
      
      <div className='card-container'>
        <Card className='text-center mt- bg-dark text-light' style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src="src/imgdata/stanley.jpg" className="img-fluid rounded-circle p-3 circle-image" style={{ width: '300px', height: '300px' }}/>
          <Card.Body>
            <Card.Title >Stanley Balmores</Card.Title>
            <Card.Text>
              Role: Front-End Developer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center mt- bg-dark text-light' style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src="src/imgdata/SimonFornillos2.jpg" className="img-fluid rounded-circle p-3 circle-image" style={{ width: '300px', height: '300px' }}/>
          <Card.Body>
            <Card.Title >Simon Fornillos</Card.Title>
            <Card.Text>
              Role: Front-End Developer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='text-center mt- bg-dark text-light' style={{ width: '18rem', margin: '20px' }}>
          <Card.Img variant="top" src="src/imgdata/PaulMiranda.jpg" className="img-fluid rounded-circle p-3 " style={{ width: '300px', height: '300px' }}/>
          <Card.Body>
            <Card.Title >Paul Miranda</Card.Title>
            <Card.Text>
              Role: Back-End Developer
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

    </div>   
      )
    })}

    </>
  );
};

export default Mainpage;
