import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Ootyplaces = () => {
  return (
    < Container > 
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Ooty</h4>
     <Col className='d-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/ooty1 (1).jpeg")}></Image>
       <Card.Body>
         <Card.Title>
Nilgiri Mountain Railway</Card.Title>
         <Card.Text>
         Nilgiri Mountain Railway, also
known as Toy Train in Ooty, is
one of the key attractions of the
popular hill..
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/ooty1 (2).jpeg")} ></Image>
       <Card.Body>
         <Card.Title>Ooty Botanical Garden</Card.Title>
         <Card.Text>
         Ooty Botanical Gardens lie on
the lower slopes of the
Doddabetta peak, the
Government Botanical...

         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card> 
 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/ooty1 (3).jpeg")}width={245} height={163}></Image>
       <Card.Body>
         <Card.Title>Emerald Lake</Card.Title>
         <Card.Text>
         Emerald Lake is situated in
Emerald Village, around 20-22
kilometres from the main city of
Ooty and...

 
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/ooty1 (4).jpeg")}width={245} height={163}></Image>
       <Card.Body>
         <Card.Title>Dolphin’s Nose</Card.Title>
         <Card.Text>
         Located about 12 km away
from Coonoor is the Dolphins
Nose about 1,500 meters above
sea level. The tip...

         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Ootyplaces;