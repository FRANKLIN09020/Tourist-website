import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Kumbakonamplaces = () => {
  return (
    < Container>
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Kumbakonam</h4>
     <Col className='d-lg-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/Kumbakonam.jpeg")}width={245} height={163}></Image>
       <Card.Body>
         <Card.Title>
Sarangapani Temple</Card.Title>
         <Card.Text>
         Sarangapani Temple, an ancient
temple dedicated to Lord
Vishnu, is located in the town of
Kumbakonam...


         </Card.Text>
         <Button variant="primary mt-4">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kumbakonam1.(2).jpeg")} width={245} height={163}></Image>
       <Card.Body>
         <Card.Title>
         Nageswaran Temple
</Card.Title>
         <Card.Text>
         Constructed as a chariot, the
Nageswaran temple is an
important Shalvite temple. A
piece of genius Chola.

         </Card.Text>
         <Button variant="primary" style={{position:"relative",top:"25px"}}>Read More</Button>
       </Card.Body>
     </Card> 
 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/Kumbakonam(3).jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Adi Kumbeshwara
Temple</Card.Title>
         <Card.Text>
         Located in the town of
Darasuram near Kumbakonam
in Tamil Nadu, Airavatesvara...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kumbakonam1 (4).jpeg")}></Image>
       <Card.Body>
         <Card.Title>

         Airavatesvara Temple</Card.Title>
         <Card.Text>
         Located in the town of
Darasuram near Kumbakonam
in Tamil Nadu, Airavatesvara
Temple is a revered...

 
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Kumbakonamplaces;