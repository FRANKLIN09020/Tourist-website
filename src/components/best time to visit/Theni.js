import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Theni = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

    <Container>
   <Row>
    <Col>
    <h4 className='mt-5'>09. Theni</h4>
    <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        In order to spend your vacation in the
lap of nature in south India, no place would be better than the town of
Cardamom - Theni. The best season to visit Then is winter when the weather
remains all pleasant and favourable for tourism. On the other hand, summer
remains hot and monsoon receives a heavy rainfall which makes the two
seasons not suitable for touring.
   <br></br> <br /></span>
    <span style={{marginLeft:"260px"}}>
    Theni is known for having a salubrious
climate throughout the year. The average temperature ranges between 15
degrees Celsius to 40 degrees Celsius. The best months to visit are from the
month of December to February since the weather is pleasant and allows you
to indulge in a number of outdoor activities.
</span>
    </p>
    
</Col>


   <Col className='mt-5'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'relative' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>More About Best Time To Travel To Theni</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/theni1.jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/theni2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/theni3.jpeg")} className='d-block mx-3' width={100} 
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
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br /> Theni</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Thenni in Summer</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Tne summer season in Then starts from
the month of March and continues tl May. The
months are general hot and not favourable to vist
Then. Temperature dung these months ranges
between 24°C and 42°C.<br /></span></p>
          <br />
         <br />
         <h6 style={{fontWeight:"bold"}}>Theni in Winter</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Monsoon in Then! strkes in the month of
June ang lasts until September. The town
experiences 3 heavy rainfal curing ts time that
ils the tonn with zest Despite being at peak of its
beauty, the town of Theni Is not best to vist during
<br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>
Theni in Monsoon
</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>December mars the beginning of winter
season in Theni which ends in the month of
February. The temperature during these months
varies fiom 22°C to 32°C, and thus, the town
winesses a pleasant weather and make the sesson
best tovist Then.
<br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        

   </Row>
   </Container>

   </>
  );
}

export default Theni