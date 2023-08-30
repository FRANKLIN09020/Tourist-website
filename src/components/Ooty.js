import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Ooty = () => {
  return (
    <Container id="Ooty">
    <Row>

   <Col className='mt-5'>
   <h4>04.Ooty</h4>
   <div className='d-lg-flex'>
   
   <Image src={require("../Assets/Ooty.jpeg")} width={500} height={400}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>“Queen of the Nilgi"
</h6></span>
Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is
a hill station in Tamil Nadu which serves as a top-rated tourist destination.
Once regarded as the summer headquarters of the East India Company, the
Queen of the hills is a picturesque getaway. <br /><br />
   <span  className='p-5'>
   The Nilgiri mountain railway is the steepest track in all of Asia
Remember the hit song ‘Chaiyya Chaiyya' where Shahrukh Khan and Malaika
Arora matching steps on top of a train? Remember the breathtaking locales
as the train chugged its way across lush greenery? Yes, that was the Nilgiri
Mountain Railways, and the Nilgiri Mountains all along Dotted with tea
gardens, serene waterfalls, winding country lanes, and charming colonial
architecture, Ooty is the perfect respite everyone.


</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Ooty;