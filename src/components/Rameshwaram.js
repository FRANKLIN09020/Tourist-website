import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Rameshwaram = () => {
  return (
    <Container id="Rameshwaram">
    <Row>
   
   <Col className='mt-5'>
   <h4>02. Rameshwaram</h4>
   <div className='d-lg-flex'>
   
   <Image src={require("../Assets/Rameshwaran.jpeg")} width={500} height={400}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>"The Bridge on the Indian Ocean"</h6></span>
  
   Rameshwaram is located on a beautiful island in the South Indian
state of Tamil Nadu. It is separated by a small Pamban channel from Sri
Lanka. According to Hindu mythology, this is the place where Lord Rama
created a bridge across the sea to Sri Lanka. <br /><br />
   <span  className='p-5'>
   Renowned for its magnificent prakaras with massive sculptured
pillars on either side, The Ramanathaswamy Temple houses the longest
corridor in the world. Agniteertham is famous for its sacred waters and
Pilgrims perform poojas in honour of their ancestors at this seashore. The
five-faced Hanuman Temple holds the floating stone which was used to build
the bridge between India and Sri Lanka. Rameshwaram has the first sea
bridge connecting the town of Mandapam with Pamban Island, and
Rameswaram.
</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Rameshwaram;