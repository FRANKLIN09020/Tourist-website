import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Kumbakonam = () => {
  return (
    <Container id="Kumbakonam">
    <Row>

   <Col className='mt-5'>
   <h4>06. Kumbakonam</h4>
   <div className='d-lg-flex'>
   
   <Image src={require("../Assets/Kumbakonam.jpeg")} width={500} height={400}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>“The Cambridge Of India”
</h6></span>
Kumbakonam Tourism Sandwiched between two great rivers of
 southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town
TENE in the heart of the Thanjavur district of Tamil Nadu.The town is a place for the
lovers of history and those seeking to understand India's cultural roots and
Hinduism.
  
  <br /><br />
   <span  className='p-5'>
   
The town is also known for its grand festival called Mahamaham
festival which is celebrated every twelve years at the Mahamaham Tank. The
town is one of the oldest in Indian history, and known for its famed temples,
Chola heritage and also for its marvelous educational institutes. The town is
one of the oldest in Indian history, and known for its famed temples, Chola
heritage and also for its marvelous educational institutes.

</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Kumbakonam;