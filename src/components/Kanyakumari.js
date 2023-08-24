import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Kanyakumari = () => {
  return (
    <Container id="Kanyakumari">
    <Row>

   <Col className='mt-5'>
   <h4>05. Kanyakumari</h4>
   <div className='d-flex'>
   
   <Image src={require("../Assets/Ooty.jpeg")} width={500} height={430}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>“Cape Comorin or The Land's End"
</h6></span>

Kanyakumari Tourism Bordered by the three seas - Arabian, Indian
and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian
Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was
earlier known as Cape Comorin.
 <br /><br />
   <span  className='p-5'>
  
Kanyakumari offers the marvellous confluence of the Bay of Bengal,
the Arabian Sea and the Indian ocean meeting together at a point. But, this is
not a miracle, the miracle lies in the beauty that the water of three seas does
not mix, you can clearly distinguish between the turquoise blue, deep blue
and sea green waters of the three seas. To enjoy the best view of sunset and
sunrise, you can visit the Triveni Sangam point and the famous View
tower The town has a mountainous terrain with elevated patches of hills,
coconut trees and lined with paddy fields.

</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Kanyakumari;