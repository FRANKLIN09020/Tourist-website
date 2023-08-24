import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Hogenakkal = () => {
  return (
    <Container id="Hongenakkal">
    <Row>

   <Col className='mt-5'>
   <h4>10. Hogenakkal</h4>
   <div className='d-flex'>
   
   <Image src={require("../Assets/Hogenakkal.jpeg")} width={500} height={430}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>“The one that will take your breath away"
</h6></span>
Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri
district of Tamil Nadu where the Kaveri river splits into multiple streams of
waterfalls, Located at a distance of 180 km from Bangalore, Hogenakkal has
water throughout the year. The carbonite rocks, the coracle (basket boat)
tides, freshwater fish, oil massages by locals make it a perfect one day trip or
a weekend getaway from Bangalore.


  
  <br /><br />
   <span  className='p-5'>
   
   Sometimes referred to as the “Niagara Falls of India," it is also known
for the medicinal baths. Also known at Marikottayam, Hoge actually means
smoke and Kal means rock. Recently, the place has been found to be littered
with plastic bags and garbage and the fish market outside the waterfall
might stink. Weekends can be crowded. Keep all these points in mind before
visiting.



</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Hogenakkal;