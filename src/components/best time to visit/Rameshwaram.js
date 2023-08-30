import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
const Rameshwaram = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Container>
    <h4 className='mt-5'>02. Rameshwaram</h4>

    <Row>
   <Col className='mt-3'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
  
      <Modal.Dialog id="modal">
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className='text-center'>More About Best Time To Travel To Rameshwaram</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/rameshwaram1.jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center",marginRight:"18px"}} >Railway <br /> Bridge <br /> Source</h6>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/rameshwaram2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Light House Source </h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/rameshwaram3.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Pilgrims <br /> Temple <br /> Source </h6>
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
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br />Rameshwaram </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Rameshwaram in Winter (December-
February)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}> Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.<br /></span></p>
          <br />
        
         <h6 style={{fontWeight:"bold"}}>Rameshwaram in Summer (March - June)
</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons Being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much. <br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Rameshwaram in Monsoons (July-September)
</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>The monsoons in Rameshwaram experience temperatures ranging from 28 degree Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the climate except the small relief of humidity received due to short but effective downpours. Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time.
 <br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        <Col>
        <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls, but, the scenic view of the coastal region during these months is enjoyable.
<br></br> <br /></span>
<span style={{marginLeft:"260px"}}>
Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.
</span>
    </p>
    
</Col>
   </Row>
    </Container>
    </>
  );
}

export default Rameshwaram;