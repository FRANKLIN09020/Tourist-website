import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Kodaikanal = () => {
  return (
   
    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Kodaikanal</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/kodaikanal1....jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Green Valley View, Overview</h6>
        <span className='ps-5'>Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep valleys and hills, The mesmerizing
view of the Vaigai Dam is an unforgettable experience. It used to be known as suicide point because of the dangerous valley which is dense and deep;
below the point of more than 5000 feet drop.<br /> <br /></span>
        <span className='ps-5'>Located at a distance of 5.5 km from the Kodaikanal Lake, the Green Valley View not just offers a gorgeous view, but s also surrounded by
a lot of monkeys. On the way to the point, there are several shops which offer homemade chocolates, ormaments and a wide range of flowers.
 <br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Kodai Lake, Overview</h6>
        <span className='ps-5'>
        Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera Levinge was the man responsible for
the creativity and resources of this lake amidst Kodaikanal town. This lake was developed by the British and early missionaries from the USASA.

<br /> <br /></span>
        <span className='ps-5'><br /> The star-shaped lake is centrally located in Kodaikanal and is surrounded by the rich green Palani Hills Range the main watershed for
the lake. The lake is situated at an elevation of 2285m above sea level and has an average depth of 3.0m. The lake is at 2 distance of 3 km from the
Kodai Bus stand.
<br /> </span>
       </p>
       <Image src={require("../Assets/kodaikanal2.jpeg")} className='d-block w-25'></Image>
       </Col>
       
      

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/kodaikanal3..jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >
        Bear Shola Falls, Overview</h6>
        <span className='ps-5'>
        Located at 3 mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is 3 popular picnic spot in the region. This
cascades a seasonal attraction that comes to life in its fullest during the monsoons. An interesting legend behind the unique name of this place
that it was a favourite haunt of a bear who used to frequent this water body to drink water, hence imparting it the name Bear Shola Falls.

<br /> <br /></span>
        <span className='ps-5'>Wrapped with dense forests coupled with the chirping of birds, Bear Shola Fals is 2 little heaven. Also, the forest area of the Westen
Ghats situated near the falls is a biodiversity hotspot where you can have a rendezvous with animals like monkeys and deer in the wild.
<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Pillar Rocks, Overview</h6>
        <span className='ps-5'>
        Situated in the Princess of Hill stations, Kodaikanal, the Pillar Rocks have become a lovely picnic spot. Constituting 2 beautiful mini
garden; the place is named so sit has three vertically positioned boulders reaching up to a height of 400 feet. The aura here is full of affection and
is evidence of a great love story. The “white cross' which once existed on these rocks represented David Gell's excellent tribute to love. The view of
rocks is not something to be missed. They stand as an untouched miracle for the tourists visiting Kodaikanal.
<br /> <br /></span>
        <span className='ps-5'>
        The pillars are famous for providing bird's view of nearby surroundings. The chambers between these two massive rocks are called the
Devil's Kitchen. Fewer times you might find rocks covered with mist and clouds, but when the ways become clear nothing beautiful than this could
be ever seen.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/kodaikanal4.jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Kodaikanal;