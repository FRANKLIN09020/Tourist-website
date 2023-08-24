import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Kanyakumariplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Kanyalumari</h4>
     <Col className='d-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/kanyakumari1 (1).jpeg")}></Image>
       <Card.Body>
         <Card.Title>Kanyakumari Beach</Card.Title>
         <Card.Text>
         Located in the southernmost
part of India, Kanyakumari
beach with ts beautiful hue-
changing beaches...

         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kanyakumari1.(2).jpeg")} ></Image>
       <Card.Body>
         <Card.Title>Vivekananda Memorial</Card.Title>
         <Card.Text>
         The magnificent Vivekananda
Rock Memorial is located on a
small island off Kanyakumari. It
has the picturesque...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card> 
 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kanyakumari1.(3).jpeg")}></Image>
       <Card.Body>
         <Card.Title>Thiruvalluvar Status</Card.Title>
         <Card.Text>
         Dedicated to the accomplished
philosopher and poet
Thiruvalluvar, this beautiful
statue finds itself...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kanyakumari1 (4).jpeg")}></Image>
       <Card.Body>
         <Card.Title>
Thirparappu Falls</Card.Title>
         <Card.Text>
         Located at a distance of about
55 kilometers from
Kanyakumari, the cascading
waters of the Thirparappu..

 
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Kanyakumariplaces;