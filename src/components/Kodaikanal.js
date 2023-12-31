import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Kodaikanal = () => {
  return (
    <Container id="Kodaikkanal">
    <Row>

   <Col className='mt-5'>
   <h4>03. Kodaikanal</h4>
   <div className='d-lg-flex'>
   
   <Image src={require("../Assets/Kodaikanal.jpeg")} width={500} height={430}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>“The Princess of Hill Stations”
</h6></span>
  
Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is
one of the most famous honeymoon destinations in India. A Lakeside resort
town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered
manicured cliffs and waterfall that come together to create the ideal setting
for a perfect getaway. Kodaikanal means ‘the gift of the forests’.  <br /><br />
   <span  className='p-5'>
   Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal
stands at an altitude of 7200 feet above sea level, and once you visit this hill
station, you will find that every bit of what you have imagined it to be is real.
Kodaikanal is a place you can go to take a break from the rigours of daily city
life, and this hill station lets you sit back and connect with nature as you head
out on biking or trekking trails or take a stroll through the vast forests
surrounding the town.

</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Kodaikanal;