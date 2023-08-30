import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Kumbakonam = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Container>
    <h4 className='mt-5'>06. Kumbakonam</h4>

    <Row>
   <Col className='mt-3'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className='text-center'>More About Best Time To Travel To Kumbakonam </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/kumbakonam1.jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center",marginRight:"18px"}} >Dawn <br /> Source</h6>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/kumbakonam2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Steemit <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/kumbakonam3.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Holydham <br /> Source </h6>
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
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br />Kumbakonam</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Kumbakonam in Winter (October - February)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}> The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months.<br /></span></p> <br />
        
         <h6 style={{fontWeight:"bold"}}>Kumbakonam in Monsoon (June-August)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam. <br /> <br /> </span></p>

<h6 style={{fontWeight:"bold"}}>Kumbakonam in Summer (March-May)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Summers in the Deccan region of the
country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
 <br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        <Col>
        <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.

<br></br> <br /></span>
<span style={{marginLeft:"260px"}}>
Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.
</span>
    </p>
    
</Col>
   </Row>
    </Container>
    </>
  );
}

export default Kumbakonam;