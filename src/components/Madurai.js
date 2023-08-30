import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Madurai = () => {
  return (
    <Container id="Madurai">
    <Row>

   <Col className='mt-5'>
   <h4>07. Madurai</h4>
   <div className='d-lg-flex'>
   
   <Image src={require("../Assets/Madurai.jpeg")} width={500} height={400}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>
“The Lotus City"
</h6></span>
Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one
of the oldest continuously inhabited cities of India. Ruled by Pandya kings for
the longest time in its history, it is called as the ‘Lotus City" as it was planned
and built in the shape of a lotus. Madurai is known for Meenakshi Amman
Temple, dedicated to the goddess Meenakshi with a sanctum for her consort,
Sundareshwarar.
  
  <br /><br />
   <span  className='p-5'>
   
   There are many other ancient temples in Madurai, including
Thiruparankundram. It is one of the important old temples dedicated to Lord
Muruga(Karthikeya) and is located on a hillock approximately 8 km from the
city. Having trade ties with ancient Rome, the place holds a great cultural
heritage. With bustling bazaars and fantastic street food, Madurai has
heritage walks conducted throughout the day.

</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Madurai;