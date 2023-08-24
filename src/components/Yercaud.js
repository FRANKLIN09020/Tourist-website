import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Yercaud = () => {
  return (
    <Container id="Yercaud">
    <Row>

   <Col className='mt-5'>
   <h4>08. Yercaud</h4>
   <div className='d-flex'>
   
   <Image src={require("../Assets/Yarcaud.jpeg")} width={500} height={350}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>"The Land of Seven Forest"
</h6></span>
Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud
is a hill station in the Eastern Ghats steeped in abundant greenery
Commonly called ‘Ooty of the Poor’, this region has a history dating back to
the time of the British. Located at an altitude of 4970 feet, Yercaud is known
for its vast expanses of coffee plantations and great weather.

  
  <br /><br />
   <span  className='p-5'>
   
   Yercaud lake is the main point of attraction of the region.One of the
many highlights is the summer festival that takes place in May. It is dedicated
to Lord Servarayan, the supreme god of the ranges and gives visitors a
glimpse into the rich heritage of this region.

</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Yercaud;