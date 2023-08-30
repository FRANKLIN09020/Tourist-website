import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col,Row,Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Carousels = () => {
  return (
<Container>
        <Row>
        <Col >
        <Carousel>
      <Carousel.Item >
      <Image src={require("../Assets/banner1.jpg")} alt="Banner" className='d-block w-100' height={580} id='img'   />
      </Carousel.Item>
      <Carousel.Item >
      <Image src={require("../Assets/pic1.jpeg")} alt="Banner" className='d-blcok w-100' height={580} id='img'/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/pic2.jpeg")} alt="Banner" className='d-blcok w-100' height={580} id='img'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image  src={require("../Assets/pic3.jpeg")} alt="Banner" className='d-blcok w-100' height={580} id='img' />
      </Carousel.Item>

    <Carousel.Item>
      <Image src={require("../Assets/pic4.jpeg")} alt="Banner" className='d-blcok w-100' height={580} id='img' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
   
  );
}

export default Carousels;