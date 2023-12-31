import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Theni = () => {
  return (
    <Container id="Theni">
    <Row>

   <Col className='mt-5'>
   <h4>09. Theni</h4>
   <div className='d-lg-flex'>
   
   <Image src={require("../Assets/Theni.jpeg")} width={500} height={420}></Image>
   <p style={{textAlign:"justify"}} className='mx-4'> <span  className='p-5'><h6>"A little hamlet in Tamil Nadu”
</h6></span>
Theni Tourism Dotted by luscious patches of greenery and beautiful
waterfalls, Theni is a little hamlet on the Western Ghats. The topography of
Theni mainly consists of hills and ranges. It has plenty of rivers and dams and
is an abode to 27 forests hence filled with unparalleled greenery.

  
  <br /><br />
   <span  className='p-5'>
   
   There temples like Kamatchi Amman Temple, Vellappar Temple, and
Balasubramanya Temple which are brimming with devotees from all around
the country throughout the year. The vibrant local markets of Theni are
shoppers’ paradise. The local handloom products and agricultural products
are the best buys at these markets. The aroma filled tea estates in Theni are a
paradise. The Kolukkamalai Tea estate is often deemed to be the world's
highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the
crown jewels of Theni.


</span>
</p>
 
</div>
   </Col>
    </Row>
   </Container>
  );
}

export default Theni;