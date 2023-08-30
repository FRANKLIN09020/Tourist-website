import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
const Kodaikanal = () => {

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
    <h4 className='mt-5'>03. Kodaikanal</h4>
    <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colourful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.
Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy-tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January.
</span>
    </p>
    
</Col>


   <Col className='mt-5'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'relative' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton  onClick={handleClose}>
          <Modal.Title className='text-center'>More About Best Time To Travel To Kodaikanal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/kodaikanal1.jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center",marginRight:"18px"}}>Upper Lake Source </h6>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/kodaikanal2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Kodaikanal <br /> Lake <br />
 Source</h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/kodaikanal3.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Pillar Rocks Source </h6>
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
      <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header  closeButton onClick={handleClose}>
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br /> Kodaikanal </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Kodaikanal in Summer (March-June)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.<br /></span></p>
         <br />
         <h6 style={{fontWeight:"bold"}}>Kodaikanal in Winter (December-February)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.  <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Kodaikanal in Monsoons (July-September)
</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>With a temperature that rarely falls
below 8 degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks, and attend the famous Pongal festival celebrated during January.<br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        

   </Row>
   </Container>
   </>
  );
}

export default Kodaikanal;