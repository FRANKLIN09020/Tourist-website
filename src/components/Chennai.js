import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Chennai = () => {
  return (
   <Container id="Chennai">
    <Row>

   <Col className='mt-5'>
   <h4>01.Chennai</h4>
   <div className='d-flex'>
   
   <Image src={require("../Assets/Chennai.jpeg")} width={530} height={420}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>"The Detroit Of India"</h6></span>
  
   Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle.  <br /><br />
   <span  className='p-5'>
Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  )
}

export default Chennai;