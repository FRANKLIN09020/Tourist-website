import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Madurai = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

    <Container>
        <div className='mt-3' >

   </div>
   <Row>
    <Col>
    <h4 className='mt-5'>07. Madurai</h4>
    <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        October to March is the best time to visit Madurai. With a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.
     <br></br> <br /></span>
    <span style={{marginLeft:"260px"}}>
    Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.
</span>
    </p>
    
</Col>


   <Col className='mt-5'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'relative' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>More About Best Time To Travel To Madurai</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/madurai1.jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/madurai2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/madurai3.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
       </Col>
         </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleShow}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
     
      </div>
         </Col>
      <Offcanvas show={show} onHide={handleClose}  >
         <Offcanvas.Header closeButton onClick={handleClose}>
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br />  Madurai</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Madurai in Winter (December-February)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}> 
Many locals look forward to. the
winter season In Madural due to the relief t
rings from the summers. Th season fasts from
December to February. The temperature curing
the winter months ranges from 20 cegree
Celsius to 29 degree Celsius. Tre season is
cnaracterises by moderately cool temperatures
whieh make traveling round the city 2 pleasant
experience for al individuals. Pongal 3 videly
celebrated festival s regarded a5 extremely
special in Maoursl The festival lasts for three
Gays and comprises of praying for a good
rarest by locas ano farmers alike. Otrer
reious festivals are iso celebrated with great
vigour. However, hotel prices may climb up as
ths is the peat tourist season.
<br /></span></p>
          <br />
         <br />
         <h6 style={{fontWeight:"bold"}}>Madurai in Monsoon (June-August)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Monsoon season in Madurai lasts
madurai lasts from June to August. Although the monsoon
Season continues for a smaller amount of time,
the south-west monsoon winds bring in a large
amount of rainfall which is extremely heavy. This
rainfall also makes the weather gloomy but stil
makes the City beautiful as the nature around
Madurai mainly benefits from this rain. Ths is
the perfect time to vist Madurai for people who
love greeny ano the lush natural
surroundings.
 <br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Madurai in Summer (March-July)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>The summer season Tn Madura! lasts
from March to May. The temperatures uring
ths season range from 24 degree Celsius to 34
degree Celsius, This means that the weather in
Madurai during these months is
uncharactersticaly hot. It is also really dry
which makes the heat more noticeable and
discourages travellers to vist. The summer
sesson is therefore, an offsesson for Madurai,
and the crowds are comparatively less as well.<br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        

   </Row>
   </Container>

   </>
  );
}

export default Madurai;