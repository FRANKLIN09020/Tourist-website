import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
const Chennaiplaces = () => {
  return (
   < Container  >
   <Row>
    <h4 className='text-center pt-5'>Must Visit Place In Chennai</h4>
    <Col className='d-lg-flex'>
    <Card style={{ width: '20rem'  }} className='m-3 '>
    <Image src={require("../Assets/chennai1.jpeg")}></Image>
      <Card.Body>
        <Card.Title>Marina Beach</Card.Title>
        <Card.Text>
        Situated in the city of Chennai
in Tamil Nadu, Marina Beach is
a natural urban beach along the
Bay of Bengal...
        </Card.Text>
        <Button variant="primary mt-4">Read More</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '20rem' }} className='m-3'>
    <Image src={require("../Assets/chennai2.jpeg")} ></Image>
      <Card.Body>
        <Card.Title>MGR Flim City </Card.Title>
        <Card.Text>
        Having been established in theyear 1994, a considerably newstructure, the MGR Film ity ismanaged...
        </Card.Text>
        <Button variant="primary mt-4">Read More</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '20rem' }} className='m-3'>
    <Image src={require("../Assets/chennai3...jpeg")}></Image>
      <Card.Body>
        <Card.Title>Marundeeswarar Temple</Card.Title>
        <Card.Text>
        The magnificent Marundeeswarar Temple, in
         Tiruvanmiyur, near Chennai has the temple deity Shiva...
        </Card.Text>
        <Button variant="primary ">Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='m-3'>
    <Image src={require("../Assets/chennai4.jpeg")}></Image>
      <Card.Body>
        <Card.Title>Breezy Beach</Card.Title>
        <Card.Text>
        Breezy Beach lays in the remote
and serene neighbourhood of
Valmiki Nagar in Chennai. Being
smaller and less polluted...

        </Card.Text>
        <Button variant="primary  mt-4">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    
   </Row>
   </Container>
  );
}

export default Chennaiplaces;