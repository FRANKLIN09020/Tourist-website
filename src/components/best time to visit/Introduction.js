import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Introduction = () => {
  return (
    <>
     <Container>
        <h4 className='mt-5'>TAMILNADU TOURISM</h4>
        <h3>BEST TIME TO VISIT</h3>
      
             <Row className='mt-5'>
            <Col >
            <Image src={require("../Gallery/Climate.jpeg")}  width={500} className='flex-shrink-0'></Image>
            <h6 className='text-center'>Best Time To Visit</h6>
           </Col>
           <Col>
            <Accordion defaultActiveKey="0"  >
            <h5 className='text-center'>More About Best time To Travel To Tamil Nadu</h5>
      <Accordion.Item eventKey="0" className='mt-5 '>
        <Accordion.Header >Tamil Nadu in Summer(March-May) </Accordion.Header>
        <Accordion.Body>
        <p style={{textAlign:"justify"}}>
            <span className='mx-5'>This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness. </span>
        </p> 
        <Image src={require("../Gallery/image.jpeg")} className='d-block w-100'></Image>
        <h6 className='text-center'>
        Pillar Rocks Of KodaikanalSource
        </h6>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tamil Nadu in Monsoon(June-September)</Accordion.Header>
        <Accordion.Body>

       <p style={{textAlign:"justify"}}> <span className='mx-5'>This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe place
to visit.</span></p> 
<Image src={require("../Gallery/image1.jpeg")} className='d-block w-100'></Image>
        <h6 className='text-center'>
        A Rainy Day In Chennai Source
        </h6>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Tamil Nadu Winter (October-February)</Accordion.Header>
        <Accordion.Body>
        <p style={{textAlign:"justify"}}> <span className='mx-5'>Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.</span></p> 
        <Image src={require("../Gallery/image2.jpeg")} className='d-block w-100'></Image>
        <h6 className='text-center'>
       Pechiparai Reservoir in Kanyakumari District Source
        </h6>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <p style={{textAlign:"justify"}} className='mt-3'><span className='mx-5'>The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.</span></p>
    </Row>
     
     
     </Container>
 
    </>
  );
}

export default Introduction;