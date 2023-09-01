import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Rameswaramplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Rameswaram</h4>
     <Col className='d-lg-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/rameshwarem1.jpeg")}></Image>
       <Card.Body>
         <Card.Title>Dhanushkodi Temple</Card.Title>
         <Card.Text>
Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a... 
         </Card.Text>
         <Button variant="primary" style={{position:"relative",top:"25px"}}>Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/rameshwarem1 (5).jpeg") } height={164} width={245}></Image>
       <Card.Body>
         <Card.Title> Lakshmana Temple </Card.Title>
         <Card.Text>
         Lakshmana Tirtham had been constructed in the loving  memory of Lord Lakshman,  brother of Lord Rama. In order...
         </Card.Text>
         <Button variant="primary ">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/Rameshwaram3..jpeg")}></Image>
       <Card.Body>
         <Card.Title> Rameshwaram Temple</Card.Title>
         <Card.Text>
         A perfect blend of mind-boggling architecture and  spiritual significance, Rameshwaram Temple, also...
         </Card.Text>
         <Button variant="primary mt-4">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/rameshwarem1 (6).jpeg")}></Image>
       <Card.Body>
         <Card.Title> Villoondi Tirtham</Card.Title>
         <Card.Text>
         Villoondi Tirtham is a beach which is also considered a
         sacred natural water body and a favourite amongst tourists...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  )
}

export default Rameswaramplaces;