import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Yercaudplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Yercud</h4>
     <Col className='d-lg-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/yercaud...(1).jpeg")}height={140}></Image>
       <Card.Body>
         <Card.Title>Pagoda Point</Card.Title>
         <Card.Text>
         Located in the eastern part of
the Yercaud Hills, Pagoda point
is a beautiful viewpoint where
one is treated ...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/yercaud1 (2).jpeg")} ></Image>
       <Card.Body>
         <Card.Title>
         Botanical Garden</Card.Title>
         <Card.Text>
         Any tourist who is interested in
gods gift to this planet, the
wondrous flora, and in knowing
about various...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card> 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/yercaud1.(3).jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Emerald Lake
</Card.Title>
         <Card.Text>
         The most alluring aspect of
Yercaud is its big yet natural
lake very popularly known as
the Emerald Lake...


</Card.Text>
         <Button variant="primary" >Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem',height:"355px"}} className='mt-3 mx-3'>
     <Image src={require("../Assets/yercaud1.(4).jpeg")}  className='d-block w-100'></Image>
       <Card.Body>
         <Card.Title>
         Lady,s Seat
         </Card.Title>
         <Card.Text>
         Lady's Seat is a viewpoint that
overlooks the winding ghat
road and offers a spectacular
view of Mettur Dam...
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  )
}

export default Yercaudplaces;