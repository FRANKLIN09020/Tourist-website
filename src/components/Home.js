import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col,Row,Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Home = () => {
  
  
  return (

        <Container>
        <Row>
        <Col >
        <Carousel>
      <Carousel.Item >
      <Image src={require("../Assets/banner1.jpg")} alt="Banner" width={1200}    />
      </Carousel.Item>
      <Carousel.Item >
      <Image src={require("../Assets/pic1.jpeg")} alt="Banner" width={1150} />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/pic2.jpeg")} alt="Banner" width={1160} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image  src={require("../Assets/pic3.jpeg")} alt="Banner" width={1140} />
      </Carousel.Item>

    <Carousel.Item>
      <Image src={require("../Assets/pic4.jpeg")} alt="Banner" width={1150} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
   
  );
}

export default Home;