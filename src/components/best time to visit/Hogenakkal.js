import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Hogenakkal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Container>
    <h4 className='mt-5'>10. Hogenakkal</h4>

    <Row>
   <Col className='mt-3'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className='text-center'>More About Best Time To Travel To  Hogenakkal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/hogenakkal1 (1).jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Winter <br /> Source</h6>
         </Col> 
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/hogenakkal1 (2).jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Monsoon <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/hogenakkal1 (3).jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Dry <br /> Source </h6>
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
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br />Hogenakkal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Hogenakkal in Monsoon (July-September)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and
more.
<br /></span></p>
          <br />
        
         <h6 style={{fontWeight:"bold"}}>Hogenakkal in Summer (March - June)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>The Indian Peninsula lies in the tropics, and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views, and have been featured in many films as well.<br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Hogenakkal in Winter (November - February)
</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, and there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks' - the sultry mist as the water strikes the rocks covers the base in a myriad of colours. Rainbows adorn the falls and the scene is postcard-perfect.

 <br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        <Col>
        <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        The best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenekkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 - 34 degree celcius. Despite summers being an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.
<br></br> <br /></span>
<span style={{marginLeft:"260px"}}>
Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks", because of the unique arrangement of the gigantic carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerised! Hogenakkal Waterfall is similar to the popular.

</span>
    </p>
    
</Col>
   </Row>
    </Container>
    </>
  );
}

export default Hogenakkal;