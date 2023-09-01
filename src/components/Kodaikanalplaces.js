import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Kodaikanalplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Kodaikanal</h4>
     <Col className='d-lg-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/kodaikanal1....jpeg")}></Image>
       <Card.Body>
         <Card.Title>Green Valley View</Card.Title>
         <Card.Text>
         Formerly known as Suicide
point, the Green Valley View
offers a breathtaking view of
the plains, deep...
         </Card.Text>
         <Button variant="primary" style={{position:"relative",bottom:"3px"}}>Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kodaikanal2.jpeg")} ></Image>
       <Card.Body>
         <Card.Title>Kodai Lake</Card.Title>
         <Card.Text>
         Kodaikanal Lake is a manmade
lake in the Kodaikanal city
which is also known as Kodai...
         </Card.Text>
         <Button variant="primary" >Read More</Button>
       </Card.Body>
     </Card> 
 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kodaikanal3..jpeg")}></Image>
       <Card.Body>
         <Card.Title>Bear Shola Falls</Card.Title>
         <Card.Text>
         Located at a mere distance of 2
kilometres from the Kodaikanal
Lake, the Bear Shola Falls is a
popular...
 
         </Card.Text>
         <Button variant="primary"  style={{position:"relative",top:"3px"}}>Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/kodaikanal4.jpeg")}></Image>
       <Card.Body>
         <Card.Title>Pillar Rocks</Card.Title>
         <Card.Text>
         Situated in the ‘Princess of Hill
stations’, Kodaikanal, the Pillar
Rocks have become a lovely
picni...
         </Card.Text>
         <Button variant="primary" style={{position:"relative",top:"5px"}}>Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Kodaikanalplaces;