import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Theniplaces = () => {
  return (
    < Container >
    <Row>
     <h4 className='text-center pt-5'>Must Visit Place In Theni</h4>
     <Col className='d-lg-flex '>
     <Card style={{ width: '18rem'  }} className='m-3'>
     <Image src={require("../Assets/theni1.(1).jpeg")}></Image>
       <Card.Body>
         <Card.Title>Chinna Suruli Falls
</Card.Title>
         <Card.Text>
         Located in the lap of wild, green
forests, Chinna Suruli Falls is a
picturesque destination to visit
from Theni.
         </Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/theni1 (2).jpeg")} ></Image>
       <Card.Body>
         <Card.Title>
         Kumbakkarai Falls</Card.Title>
         <Card.Text>
         Located in Dindigul district near
Theni in Tamil Nadu,
Kumbakkarai Falls is a
mesmerising waterfall that...      

         </Card.Text>
         <Button variant="primary" style={{position:"relative",top:"23px"}} >Read More</Button>
       </Card.Body>
     </Card> 
 
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/theni1.(3).jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Meghamalai
</Card.Title>
         <Card.Text>
      
Tucked within the Western
Ghats of Tamil Nadu,
Meghamalai in Theni district is
the kind of hidden paradise...


</Card.Text>
         <Button variant="primary">Read More</Button>
       </Card.Body>
     </Card>
     <Card style={{ width: '18rem' }} className='m-3'>
     <Image src={require("../Assets/theni1.(4).jpeg")}></Image>
       <Card.Body>
         <Card.Title>
         Suruli Falls
         </Card.Title>
         <Card.Text>
    
Suruli Falls is a beautiful
waterfall in the Theni district of
Tamil Nadu and one of the
major tourist attractions of.
         </Card.Text>
         <Button variant="primary" style={{position:"relative",top:"23px"}}>Read More</Button>
       </Card.Body>
     </Card>
     </Col>
     
    </Row>
    </Container>
  );
}

export default Theniplaces;