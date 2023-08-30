import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Rameshwaram1 = () => {
  return (

    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Rameshwaram</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/rameshwarem1.jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Dhanushkodi Temple, Overview</h6>
        <span className='ps-5'>Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a natural calamity, the cyclone, it got completely washed away.
It holds the advantage of being on an island and is exquisitely covered by waters on all the four sides of it. It is sandwiched between the Bay of Bengal and Indian Ocean.<br /> <br /></span>
        <span className='ps-5'>When viewed from a birds eye, The seas are in the shape of bow and arrow. The arrow head is considered to be a sacred place for worship by the Hindus and people from far and wide come there to offer sacred prayers to the deity. Lord Rama has his pious foot marks in this temple and the whole story of Ramayana revolves around this temple island. It is a wonderful pilgrim place for the followers of Lord Rama. The place is an approximate of 18 kms from Rameshwaram and one can easily travel by road. <br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Lakshmana Temple, Overview</h6>
        <span className='ps-5'>
        Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order to offer sacred prayers to lord Lakshmana, this temple has been constructed in Rameshwaram itself which indicates that Lord Lakshman had been given a valuable place in the dynasty of Lord Rama.
<br /> <br /></span>
        <span className='ps-5'>Several wonderful sculptures of Lord Lakshmana have been carved out from marble and the temple has the statues of lord Rama and Goddess Sita too which signifies the spirit of unitedness that exisited between them.<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/rameshwarem1 (5).jpeg")} className='d-block w-25'></Image>
       </Col>
       
      

       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/rameshwarem1 (6).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >
Villoondi Tirtham, Overview</h6>
        <span className='ps-5'>
        Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists. It also has a spring inside the sea which makes the attraction a unique one and is often associated with the Legend of Ramayana. It is believed that Lord Rama shot an arrow to create this spring to help his people with drinking water.
<br /> <br /></span>
        <span className='ps-5'>Villoondi Theertham is situated about 6 km from the Rameswaram main bus stand. Besides its arresting views and silent tides, the place is also known for its pure water spring inside the sea. A few metres from the shore, this pure water well beside the sea is a marvel. Devotees connect its existence to a mythological legend from the epic Ramayana. After rescuing Goddess Sita and bringing her back to Rameswaram from Sri Lanka, Lord Rama performed rituals by installing a Shiva linga on the spot.<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Rameshwaram Temple, Overview</h6>
        <span className='ps-5'>
        A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple, also known as Ramanathaswamy Temple of Tamil Nadu is dedicated to Lord Shiva. It also boasts of being one of the 12 Jyotirlinga temples of India. Not just spiritually, Rameshwaram Temple is appealing architecturally also. With the longest corridor of the world and immaculate carvings on pillars, it is definitely a treat for your eyes.
<br /> <br /></span>
        <span className='ps-5'>
        The lingam in the Rameshwaram Temple was installed by Lord Rama but, the construction was led by several rulers over the centuries. Inside the temple, there are two lingams- Ramalingam and Shivalingam. The latter is still worshipped first to preserve the words of Lord Rama. Besides daily Abhishkams and poojas performed with great zeal, there are absorbing festivals worth witnessing.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/Rameshwaram3..jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Rameshwaram1;