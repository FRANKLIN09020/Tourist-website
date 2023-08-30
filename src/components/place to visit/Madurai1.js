import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Madurai1 = () => {
  return (
    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Madurai</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/madurai1.jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Vaigai Dam, Overview</h6>
        <span className='ps-5'>Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni District in the South Indian State
of Tamil Nadu. Andipatti lies about 70 kilometres from Madurai and travellers on their way to Periyar Wildlife Sanctuary often visit this massive and wondrous dam. Over the years, the site has become a favourite picnic spot s it gets beautifully illuminated in the evenings especially on weekends,
and one can spend hours admiring the splendid view. The soft and warm sunrises by the reservoir are worth experiencing too.
 <br /> <br /></span>
        <span className='ps-5'>On one side of the dam is 2 beautiful garden known as Little Brindavan maintained by the management for the visitors. Little Brindavan
has a variety of exotic flowers and plants and is a preferred getaway for nature lovers living nearby. The play area made especially for children is 2
reli for parents as they watch their little ones have fun in the unpolluted air.<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Meghamalai, Overview</h6>
        <span className='ps-5'>
        Often known as the “High Wavy Mountains, Meghamalai is 2 petit yet beautiful place located in the Wester Ghats in the state of Tamil
Nadu. At 2n elevation of 1500 meters, this place is 2 perfect getaway to beat the heat and enjoy some peaceful time relaxing amidst nature. Nestled
between the evergreen forest this place is filled with the fresh aroma of cardamom, cinnamon and pepper. The lush green tea plantations will give
you an opportunity to sip fresh piping tea and enjoy a lazy stroll amidst nature replete with flora and fauna.
<br /> <br /></span>
        <span className='ps-5'>The Meghamalai region of the Wester Ghats is 2 paradise unexplored even by the people of Tamil Nadu. The local Tamil language also
refers to it as Paccha Kumachi, which means ‘Green Peaks’ Located at approximately 1,500 metres above sez level, this small mountain village is
sumounded by tea and cardamom plantations.

<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/madurai2.jpeg")} className='d-block w-25'></Image>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/madurai3.jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Samanar Hills, Overview</h6>
        <span className='ps-5'>
        Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock complex which was originally home to Tamil Jain monks. The hill caves are a popular place of tourism and have elaborate carvings and drawings of the monks, on the interior walls. The spot also has a beautiful lotus temple located in the premises.
<br /> <br /></span>
        <span className='ps-5'>There is no better place to escape the heat than this picturesque getaway surrounded by nature. Meghamalai is one of the best places to visit in Tamilnadu if you are looking for a quiet and peaceful weekend away from the city. During your vacation in this hill station, you can explore the following samanar hills tourist places. The city stands out for the active nightlife of the people, making it the safest place to travel.Madurai which is one of the oldest temple city has lot more to offer than just spiritual things
<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Thirumalai Nayakar, Overview</h6>
        <span className='ps-5'>
       Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak. The palace depicts the perfect blend of Dravidian and Rajput styles. After Independence, this palace was declared as a national monument and till date continues to be one of the spectacular monuments of Southern India. The magnificent palace is located in the vicinity of the very famous Meenakshi Amman Temple. Depicting the Saracenic style of architecture, it was constructed during the rule of Nayak Dynasty and is widely considered as the most illustrious monument built by the Madurai Nayak Dynasty.he alluring palace (Nayak Mahal palace) is in the main city of Madurai, which is located 2 km away from the Meenakshi Amman temple.The Thirumalai Nayak Mahal was built by the Thirumalai Nayak king during the 16th century. The building that is still observable was the resident of the King Nayak and the throne of the King Nayak has been kept for display.

<br /> <br /></span>
    
       </p>
       <Image src={require("../Assets/madurai4..jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Madurai1;