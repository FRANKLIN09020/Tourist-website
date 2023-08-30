import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Place = () => {
  return (
    <Container className='mt-5' id="place">
      
    <Row className='mt-lg-5'>
      <Col className='d-lg-flex'>
        <p style={{textAlign:"justify"}}> 
        <h4 className='mb-lg-4' >Tourist Places To Visit In Tamil Nadu</h4>
            <span className='mx-5'>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagir, Masinagudi,
Conoor, Madumalai, Vercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri,
Nilgii, Krishnagiri, Aurovlle, Then, Hullathy, Rameshwaram, Kalhatty Ghat and more. <br />
<br/>
</span>
<span className='mx-5'>
Enjoy a vacation to remember and cherish some amazing experiences while
touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches,
beautiful temples known for Dravidian architecture, bustling shopping bazaars and
adventurous wildlife places, these places offer a splendid mix to help you make superb
travel itinerary. <br/>
<br/>
</span>
<span className='mx-5'>
Looking forward to visiting the mast stunning places to see in Tamil Nadu? Well,
then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the
emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic
beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome
experience in store, whether you are going for leisure, backpacking or looking for an
adventure. 
<br/> 
</span>
</p>

</Col>
        <Col>
        <Image src={require("../Assets/Place.jpeg")} className='d-block ' width={490} height={400}></Image>
        <h6 className='text-center'>Tourist Places To Visit In Tamil Nadu</h6>
        </Col>
        </Row>  
       
            <p style={{textAlign:"justify"}} className='mt-3' >
            <span className='mx-5'>
The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures, Tourists here can choose among many offbeat places like Yelagiri and
Yercaud to the famous cultural citadels like Mahabalipuram and Madurai, Tamil Nadu is also home to the southemmost land of Indiz- Kanyakumari and one of the char dhams-
Remeshwaram. Whether it is an adventure you are looking for or 2 religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.
</span>  
</p>
</Container>
  );
}

export default Place;