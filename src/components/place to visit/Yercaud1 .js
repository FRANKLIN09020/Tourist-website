import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Yercaud1  = () => {
  return (
    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Yercaud</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/yercaud...(1).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Pagoda Point, Overview</h6>
        <span className='ps-5'>
        Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated to a panoramic view of the entire town of Salem as well as the neighbouring village of Kakambadi. The twists and turns of the 21 hairpin bends of Yercaud can be seen from this spot as they envelop themselves around the hills. The mysterious piles of stones arranged in the form of a pyramid resembling a Pagoda give the location its unique name. These stones are believed to be placed here by local tribes.
 <br /> <br /></span>
        <span className='ps-5'>Between the Pagodas here lies a temple devoted to Lord Rama. One can indulge in the amazing natural beauty of the spot and the scenery of the Eastern Ghats, with the greenery growing within the rugged terrains of the hills, entwined with sights of the craggy cliffs.<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Botanical Garden, Overview</h6>
        <span className='ps-5'>
        Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various species of plants must make it a point to visit the orchid garden and the green house in the Botanical garden.
<br /> <br /></span>
        <span className='ps-5'>
        Yercaud is the place where the famous Kurinji flower blooms in plenty and the specialty of this flower is that it will bloom only once in twelve years. The National Orchidarium which is located 2 km from the Emerald Lake has a wide variety of orchids which includes 30 orchid species that are exclusively found here. Many endangered species of orchids are persevered in this orchidarium which is ranked the third largest of all the orchidariums in India.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/yercaud1 (2).jpeg")} className='d-block w-25'></Image>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/yercaud1.(3).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Emerald Lake, Overview</h6>
        <span className='ps-5'>
        The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake. Surrounded by some wonderful cloud-peaked hills and a well persevered garden on its banks, this lake is a feast for the eyes.
<br /> <br /></span>
        <span className='ps-5'>There is a floating fountain in the lake and boating facilities are available at a reasonable rate. Self-driven as well as rowing boats can be chosen according to your comfort and intersts. A nominal amount is collected as caution fee before issuing the boats and austere safety measures are followed by the authorities.
<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Lady,s Seat, Overview</h6>
        <span className='ps-5'>
        Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam and Salem town. Besides, the place also houses a viewing tower, which is equipped with a telescope to enjoy the beautiful view. This viewing tower is open for visitors only during the daytime. Lady's Seat, Gent's Seat and Children's Seat, located to the south-west of Shevaroy Hill, are the names given to a group of rocks located on the Yercaud Hills.

<br /> <br /></span>
<span className='ps-5'>
It is believed that an English lady used to spend her evenings at this place watching the beautiful view of this rock. For those interested in a closer view, there's a mounted telescope. Swing it to your extreme right to see the Mettur Dam on the Cauvery River. Great shots of the river can be had from this spot in the late afternoon when the sun's rays are reflected in its waters.  

<br /> <br /></span>
    
       </p>
       <Image src={require("../Assets/yercaud1 (4).jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Yercaud1 ;