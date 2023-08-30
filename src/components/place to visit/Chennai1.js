import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Chennai1 = () => {
  return (
    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Chennai</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/chennai1.jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Marina Beach, Overview</h6>
        <span className='ps-5'>Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in India with almost 30,000 visitors a day. <br /> <br /></span>
        <span className='ps-5'>With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience. <br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >MGR Flim City, Overview</h6>
        <span className='ps-5'>
        Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil Nadu in loving memory of MG Ramachandran who was not only a crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu.
<br /> <br /></span>
        <span className='ps-5'>With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/chennai2.jpeg")} className='d-block w-25'></Image>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/chennai3...jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Marundeeswarar Temple, Overview</h6>
        <span className='ps-5'>
The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form of Marundeeswar or
Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must vist for anyone visiting Chennai or nearby
cities.<br /> <br /></span>
        <span className='ps-5'>Glorified in the 7th-8th century by Nayanars (Saivite Saints), Tirugnana Sambandar, and Appar, the temple was expanded by the Chola
Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been 2 place of worship especially for people with diseases and
those facing various problems with their health. The prasadam here is 2 mixture of sacred ash, water, and milk which is believed to cure any ailments.
One must visit the temple to encounter the miraculous power it is said to have.<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Breezy Beach, Overview</h6>
        <span className='ps-5'>
        Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai, Being smaller and less polluted, its a perfect
getaway for anyone looking for a peaceful evening.

<br /> <br /></span>
        <span className='ps-5'>This beach is not as popular and known 2s the Ellots beach, and is hence more quiet and peaceful. Evenings are very pleasant and
breezy here, and in the recent years lots of tourists have been attracted towards this beach for its beauty. Those looking for an amiable, refreshing
and breezy place to chill out and have fun, the Breezy beach of Chennai i the place to be.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/chennai4.jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Chennai1;