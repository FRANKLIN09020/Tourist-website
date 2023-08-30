import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Ooty = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
  <>
  <Container>
    <h4 className='mt-5'>04. Ooty</h4>

    <Row>
   <Col className='mt-3'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className='text-center'>More About Best Time To Travel To Ooty</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/ooty1.jpeg")} className='d-block mx-2' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Mountain <br /> Railway <br /> Source</h6>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/ooty2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Ooty Lake <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/ooty3.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Trekking Ooty Source </h6>
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
      <Offcanvas show={show} onHide={handleClose}  placement='end' >
         <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br />Ooty</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Ooty in Summer (March - June)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}> Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.<br /></span></p>
          <br />
        
         <h6 style={{fontWeight:"bold"}}>Ooty in Winter (October - March)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.
<br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Ooty in Monsoon (July-September)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>People who love rainfall and green grass
beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless.
 <br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        <Col>
        <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.

<br></br> <br /></span>
 <span style={{marginLeft:"260px"}}>
The poised and elegant 'Queen of Hill Stations' welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.
</span>
    </p>
    
</Col>
   </Row>
    </Container>
  </>
  )
}

export default Ooty;