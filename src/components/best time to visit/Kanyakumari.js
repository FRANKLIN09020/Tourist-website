import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

const Kanyakumari = () => {
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
    <h4 className='mt-5'>05. Kanyakumari</h4>
    <h5 className='mt-5'>What is the best time to visit:</h5>
    <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"260px"}}>
        The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savouring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.
    <br></br> <br /></span>
    <span style={{marginLeft:"260px"}}>
    Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year.
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
         <Image src={require("../Gallery/kanyakumari1 (1).jpeg")} className='d-block mx-2' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}} >Landscape <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
         <Image src={require("../Gallery/kanyakumari1 (2).jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
          <h6 style={{textAlign:"center"}}>Sea <br /> Source </h6>
         </Col>
         <Col className='justify-content-center'>
          <Image src={require("../Gallery/kanyakumari1 (3).jpeg")} className='d-block mx-3' width={100} 
         height={150} ></Image>
         <h6 style={{textAlign:"center"}}>Coast <br /> Source </h6>
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
          <Offcanvas.Title style={{textAlign:"center"}} className='px-5'>Best Time To Visit In <br /> Kanyakumari</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h6 style={{fontWeight:"bold"}}>Kanyakumari in Winters (October to March)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favourable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15 degree celcius to 35 degree celcius. It is also the perfect time for indulging in beach activities like sunbathing, swimming and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time.<br /></span></p>
          <br />
         <br />
         <h6 style={{fontWeight:"bold"}}>Kanyakumari in Summers (April to June)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Kanyakumari experiences moderate weather during summers, with temperatures ranging from 22 degrees to 35 degrees Celcius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preffered for travel. However, the place gets vacant with less crowd and cheaper accomodation -  a perfect time for budget travellers.  <br /> <br /> </span></p>



<h6 style={{fontWeight:"bold"}}>Kanyakumari in Monsoons (July to September)</h6>
         <p style={{textAlign:"justify",fontSize:"17px"}} ><span style={{marginLeft:"70px"}}>Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September, however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari. <br /></span></p>
        </Offcanvas.Body>
        </Offcanvas>
        

   </Row>
   </Container>

   </>
  );
}

export default Kanyakumari;