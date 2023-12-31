import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Kanyakumari1 = () => {
  return (

    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Kanyakumari</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/kanyakumari1 (1).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Kanyakumari Beach, Overview</h6>
        <span className='ps-5'>Located in the southemmost part of India, Kanyakumari beach with its beautiful hue-changing beaches, the confluence of three water
bodies: Bay of Bengal, Indian Ocean, and the Arabian Sea. Miraculously, here you can see that the water of three seas does not mix, you can
distinguish between the turquoise blue, deep blue, and sea green waters of the three seas, though the colors keep changing with the season and the
day's weather. <br /> <br />
</span>
        <span className='ps-5'>
        The beach is not conducive to swim or surf as the water as the sea is rough and the beach is rocky.To enjoy the best view, you can visit the
        Triveni Sangam point and climb up the famous lighthouse watchtower to entirely take in its beauty.
 <br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Vivekananda Memorial, Overview</h6>
        <span className='ps-5'>
        The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque Indian Ocean in its
backdrop. It s situated on one of the two adjacent racks projecting out of the Lakshadweep Sea and comprises of the ‘Shripada Mandapam’ and
the "Vivekananda Mandapam: Vivekananda Rock Memorial is located at about S00 meters east of the mainland of Vavathurai in Kanyakumari and
can be accessed by regular ferries.

<br /> <br /></span>
        <span className='ps-5'><br /> This statue was built in the year 1970 on the island situated in Vavathurai, but on the site where Vivekananda attained enlightenment.
The Shripada Mandapam has a study hall and a museum, where you can explore Vivekananda's life and work in depth.
<br /> </span>
       </p>
       <Image src={require("../Assets/kanyakumari1.(2).jpeg")} className='d-block w-25'></Image>
       </Col>
       
      

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/kanyakumari1 (3).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >
        Thiruvalluvar Status, Overview</h6>
        <span className='ps-5'>
        Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself on a small island near Kanyakumari.
Thiruvalluvar was the author of a legendary work in the world of Literature, Tirukkural, the classic Tamil text. In his devotion, the work for the statue
started in 1990 and continued tll 1998, during the year in which the figure finally got completed.
<br /> <br /></span>
        <span className='ps-5'>
        This monument stands tall at a mighty height of 133 feet and is perched upon a 38-foot pedestal. The pedestal's height represents the 38
chapters of virtue in Thirukkural. Full of symbolism and cultural significance, this destination is awe-inspiring, and a must-visit, . Ganapati Sthapati
sculpted the statue, and it was unveiled on January 1, 2000, Surrounded by the waters, the statue is settled at an ideal location, and a short ferry ride
can quickly help you reach the masterpiece.

<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Thirparappu Falls, Overview</h6>
        <span className='ps-5'>
        Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu Falls make up for an
enchanting sight. This waterfall is 2 manmade one and falls from a height of 50 feet. The water collects in a quaint pool below which is an ideal
place to frolick around, especially for children. The falls are surrounded by thick green foliage and indigenous fauna, which make it a nature lover's
paradise.
<br /> <br /></span>
        <span className='ps-5'>
        These falls are 2 unique combination of streams that flow together to form a magnificent waterfall. The containment below is no less
than a top tier waterpark and is perfectly safe too. The entrance of this destination has a small temple dedicated to Lord Shiva and is highly revered
by the locals.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/kanyakumari1 (4).jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Kanyakumari1;