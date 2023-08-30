import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Theni1 = () => {
  return (
    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Theni</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/theni1.(1).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Chinna Suruli Falls, Overview</h6>
        <span className='ps-5'>
        Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni. It cascades all the way down from Meghamalai to form a pool of cool, sparkling water at the foothills of the mountain. Located around 54 kilometres away from the main centre, near the Kombaithozhu village, Chinna Suruli Falls is a lovely and serene destination to visit in and around Theni. It can be included in your itinerary of local sightseeing if you are visiting Theni and its nearby attractions.
 <br /> <br /></span>
        <span className='ps-5'>Chinna Suruli Falls is one of the beautiful waterfalls near Madurai and the top visiting places in Megamalai range. It is also known as Cloudland Falls as it originates in the Megamalai Hills. In the local language, Chinna means small or younger, so in a sense, it is called the younger Suruli.<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Kumbakkarai Falls, Overview</h6>
        <span className='ps-5'>
        Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that is situated at the foothills of the Kodaikanal hills. The water cascades down in two layers- at the first stage, the water collects at the rock boulders and recesses. And in the second stage, it falls down the layer of rocks. These recesses are named after wild animals like tiger, snake, elephant, cheetah etc.
<br /> <br /></span>
        <span className='ps-5'>
        Besides boasting of immense scenic beauty and the melodious tinkering of the gushing waters, the place also offers utter peace and tranquility. Also unlike most other waterfalls, Kumbakkarai Falls also offer shallow waters where tourists are welcomed to swim or to take a dip. The popular tourist spot is the most crowded during the rainy season when the water level is high and the neighboring areas glows with greenery.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/theni1 (2).jpeg")} className='d-block w-25'></Image>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/theni1.(3).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Meghamalai, Overview</h6>
        <span className='ps-5'>
        Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise that you read about in books, complete with exhilarating trek routes, breathtaking scenes and an excellent opportunity to take a break from your everyday life in the lap of nature.
<br /> <br /></span>
        <span className='ps-5'>The Highwavys Mountain, locally called the Meghamalai, is an undulating terrain of peaks belonging to the Varushanad Range of Western Ghats, in Theni district of Tamil Nadu. Located at an elevation of 1,500 metres above the sea level, Meghamalai is covered in the trademark green of Sahyadri, thus earning the name 'Pacha Kumachi' in Tamil, meaning 'Green Peaks'. Green peaks of Meghamalai Source Up until recently, the Meghamalai Hills were restricted to private estates of tea and coffee plantations.
<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Suruli Falls, Overview</h6>
        <span className='ps-5'>
        Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of Theni as well. It is a perfect destination to get up close and personal with the nature and cool off in its pristine waters.

<br /> <br /></span>
<span className='ps-5'>
At a distance of 123 kms from Madurai, 22 Kms from Thekkady (via Gudalur & Karuna Muthevan Patti), 10 Kms from Kambam (via Suruli Patti) & 548 Kms from Chennai, Suruli Falls are situated amidst rich flora fauna and serve as a perfect picnic spot. The falls serve as the venue of Summer Festival, organized every year by the Tamil Nadu Tourism Department. The Kailasanathar Temple Cave is also an added attraction of the place. There are also other 18 caves in and around the Suruli Falls. The Kailasanatha temple and Suruli Velappar temple are also nearby the falls. The falls are reachable by road from Kambam and Gudalur towns.

<br /> <br /></span>
    
       </p>
       <Image src={require("../Assets/theni1.(4).jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Theni1;