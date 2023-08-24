import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Hogenakkalplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Hogenakkal</h4>
     <Col className='d-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/hogenakkal1.jpeg")}></Image>
       <Card.Body>
         <Card.Title>Theerthamalai Temple </Card.Title>
         <Card.Text>
         Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/hogenakkal2..jpeg")} ></Image>
       <Card.Body>
         <Card.Title>
         Hogenakkal Falls</Card.Title>
         <Card.Text>
         Hogenakkal Falls is a  scintillating waterfall that is located on river Kaveri in the  Dharmapuri district of...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card> 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/hogenakkal3.jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Pennagram Village
</Card.Title>
         <Card.Text>
      
         The village is located about 20 km away from Hogenakkal and  famous for its weekly fair that  it holds every..

</Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/hokenakkal4..jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Mettur Dam
         </Card.Title>
         <Card.Text>
         Mettur Dam, situated 30 miles from Salem in a small  Mettur
Village, is one of the largest
 dams in India. Built...

         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Hogenakkalplaces;