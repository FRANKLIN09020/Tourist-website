import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Chennai = () => {

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>

    <Container>
        <div className='mt-5' >
   <h3 className='text-center'>TAMILNADU TOURISM</h3>
   <h5 className='text-center'>Best Time To Visit</h5>
   </div>
   <Row>
    <Col>
    <h4 className='mt-5'>01. Chennai</h4>
    <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
    October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid. <br /> <br />
     </span>
    <span style={{marginLeft:"260px"}} >
Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.
</span>
    </p>
    
</Col>


   <Col className='mt-5'>
   <div
      className="modal show"
      style={{ display: 'block', position: 'relative' }}>
  
      <Modal.Dialog id="modal"  >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>More About Best Time To Travel To Chennai</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='px-3'>
          <Col className='justify-content-center'>
         <Image src={require("../Gallery/chennai1.jpeg")} className='d-block' width={100} 
         height={150} ></Image>
         <h6  style={{textAlign:"center",marginRight:"23px"}} >Chennai, <br /> India <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/chennai2.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Chennai, <br /> Kathipara <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/chennai3.jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Chennai, <br /> Beach <br /> Source </h6>
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
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br /> Chennai </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Chennai in Winters (November - February)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}> Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Goverment Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organised in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there. <br /></span></p>
          <br />
         <br />
         <h6 style={{fontWeight:"bold"}}>Chennai in Summers (March - June)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>March marks the onset of the summer
season in Chennai. It lasts till June and visiting the city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists. <br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Chennai in Monsoons (July-September)
</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city. <br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        

   </Row>
   </Container>

   </>
  );
}
export default Chennai;