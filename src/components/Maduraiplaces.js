import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
const Maduraiplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Madurai </h4>
     <Col className='d-lg-flex '>
     <Card style={{ width: '19rem'  }} className='m-3'>
     <Image src={require("../Assets/madurai1.jpeg")}height={140}></Image>
       <Card.Body>
         <Card.Title>Vaigai Dam</Card.Title>
         <Card.Text>
         Vaigai Dam, a magnificent
human-made structure, is
constructed over River Vaigai
near Andipatti, Theni...

         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '19rem' }} className='m-3'>
     <Image src={require("../Assets/madurai2.jpeg")} ></Image>
       <Card.Body>
         <Card.Title>
Meghamalai</Card.Title>
         <Card.Text>
         Often known as the “High Wavy
Mountains’, Meghamalai is a
petit yet beautiful place located
in the...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card> 
 
     <Card style={{ width: '19rem' }} className='m-3'>
     <Image src={require("../Assets/madurai3..jpeg")}></Image>
       <Card.Body>
         <Card.Title>Samanar Hills</Card.Title>
         <Card.Text>
         Located in Keelakuyilkudi
village near Madurai, Samanar
Hills or Samanar Malai is a
beautiful hill rock...
</Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '19.5rem' }} className='m-3'>
     <Image src={require("../Assets/madurai4..jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Thirumalai Nayakar</Card.Title>
         <Card.Text>
         Thirumalai Nayakar Palace was
erected in 1636 AD in the city
of Madurai, by King Thirumalai
Nayak...


         </Card.Text>
         <Button variant="primary mt-4">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Maduraiplaces;