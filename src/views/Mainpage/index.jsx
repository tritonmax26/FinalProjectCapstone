import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, useNavigate, useParams, Link } from 'react-router-dom';
import { Carousel, Button, Card, Container } from 'react-bootstrap';
import http from '../../lib/http';
import Shops from '../Shops';
import NavbarMain from '../../components/NavbarMain';
import './mainpage.css';

const Mainpage = () => {
  const { id } = useParams();
  const [shops, setShops] = useState([])


  async function getShops() {
    const res = await http.get('/shops')
    setShops(res.data.data)
    console.log(res.data.data)

  }

  useEffect(() => {
    getShops();
    return
  }, [])

  return (
    <>
      {/* {shops.forEach((shop, index) => {
        return (
          <div key={index}>

            <h1 className="text-light welcome-h1" >Welcome! {shop.user.name}</h1>
            
          </div>
        )
      })} */}
      <div style={{ margin: '35px', borderRadius: '50px', overflow: 'hidden' }}>
              <Carousel className='carousel-body' style={{ margin: '75px', borderRadius: '50px' }}>
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
                      <Link to="/shoppage">
                        <Button variant="dark">Create</Button>
                      </Link>
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
                      <Link to="/shops">
                        <Button variant="dark">Shops</Button>
                      </Link>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-item-container">
                    <img
                      className="d-block w-100"
                      src="src/imgdata/holdings.jpg"
                      alt="Image"
                    />
                    <div className="carousel-caption">
                      <h3>Unlock the power of efficient inventory control</h3>
                      <p>
                        Say goodbye to manual counting and spreadsheet chaos. Our
                        streamlined interface and automated features simplify inventory
                        tasks, helping you save time, reduce errors, and increase
                        productivity.
                      </p>
                      <Link to="/products">
                        <Button variant="dark">Products</Button>
                      </Link>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            {/*</div></>h1 className="text-center mt-3 text-light texth1">Welcome! {shop.user.name}</h1>*/}

            <h1 className="text-center text-light" style={{ marginTop: '100px' }}>Acknowledgements</h1>
            <p className="text-center text-light">We extend our sincere gratitude to the following individuals who have contributed to the success of this website:</p>

            <div className='card-container'>
              <Card className='text-center text-light card-color' style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src="src/imgdata/stanley.jpg" className="img-fluid rounded-circle p-3 circle-image" style={{ width: '300px', height: '300px' }} />
                <Card.Body>
                  <Card.Title >Stanley Balmores</Card.Title>
                  <Card.Text>
                    Role: Front-End Developer
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='text-center bg- text-light card-color' style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src="src/imgdata/SimonFornillos2.jpg" className="img-fluid rounded-circle p-3 circle-image" style={{ width: '300px', height: '300px' }} />
                <Card.Body>
                  <Card.Title >Simon Fornillos</Card.Title>
                  <Card.Text>
                    Role: Front-End Developer
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='text-center bg- text-light card-color' style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src="src/imgdata/PaulMiranda.jpg" className="img-fluid rounded-circle p-3 " style={{ width: '300px', height: '300px' }} />
                <Card.Body>
                  <Card.Title >Paul Miranda</Card.Title>
                  <Card.Text>
                    Role: Back-End Developer
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Container className='about-us-container'>
              <Card text="light" className="p-4 mt-4 card-color">
                <div className="row">
                  <div className="col-md-6">
                    <h1>About Us</h1>
                    <p>Welcome to S.S.P. Stocks & Holdings Inventory Data! We're a team of passionate developers who have just started our coding journey.</p>
                    <p>Our goal is to provide you with an easy-to-use platform for managing stocks and holdings. We believe that investing should be accessible to everyone, regardless of their level of expertise.</p>
                    <p>With our platform, you can track real-time data and get insights into the performance of your investments. We offer simple analysis tools to help you make informed decisions and achieve your financial goals.</p>
                  </div>
                  <div className="col-md-6 d-flex align-items-start justify-content-start border-start">
                    <div className="ps-4">
                      <p>We take your privacy and security seriously. Rest assured that your data is handled with care and protected using the latest security measures.</p>
                      <p>If you ever need assistance or have any questions, our friendly support team is here to help. We're dedicated to providing a smooth and enjoyable experience as you navigate our platform.</p>
                      <p>Join us today and embark on your investment journey with S.S.P. Stocks & Holdings Inventory Data. Let's learn, grow, and succeed together!</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Container>
    </>
  );
};

export default Mainpage;
