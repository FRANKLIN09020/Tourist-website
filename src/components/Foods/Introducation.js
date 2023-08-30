import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
const Introducation = () => {
  return (
    <Container>
    
        <div style={{marginTop:"80px"}}>
        <h4>Famous & Local Food of Tamil Nadu</h4>
        </div>
        <Row>
        <Col>
         <p className='mt-3 ' style={{textAlign:"justify"}}>
            <span style={{marginLeft:"60px"}}>
         The food of Tamil Nadu is rich in both vegetarian and non-vegetarian food. The diet mainly consists of rice, lentils, legumes with spices such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut is widely used in various forms. People of Tamil Nadu believe that serving food to another living being, be it humans or animals, is a service to God himself. Therefore, they are incredibly generous when it comes to food, whether it is in their homes or temples or even restaurants. Traditionally, this south Indian cuisine is served on a banana leaf, and people sit on the floor to eat. A typical meal consists of Rice, Sambhar(Curry), two types of vegetables, curd and a pickle. Dosas, idlis, Upma, Parota, Sambhar, Rasam, Pongal, are the dishes with which the cuisine of Tamil Nadu is identified. Payasam, Kesari, Sweet Pongal are the sweet treasures of this cuisine. Filter coffee is a speciality of the south-Indian cuisine. The making of filter coffee is like a ritual: the coffee beans are first roasted and then powdered. They then use a filter set, few scoops of powdered coffee and enough amount of boiling water is added to prepare a very dark liquid called the decoction. A 3/4 mug of hot milk with sugar and a small quantity of decoction is then served in Dabarah, a unique Coffee cup.
         </span>
         </p>
        </Col>

        <Col lg={3} style={{position:"relative",left:"33px"}}> 
        <Image src={require("../Gallery/Food1.jpeg")} className='d-block' width={230} height={230} ></Image>
        <Image src={require("../Gallery/Food2.jpg")} className='d-block  mt-3' width={230} height={230}></Image> 
        </Col>
        <Col lg={3} >
        <Image src={require("../Gallery/Food3.jpeg")} className='d-block ' width={230} height={230}></Image>
        <Image src={require("../Gallery/Food4.jpg")} className='d-block mt-3' width={230} height={230}></Image>
        </Col>
        </Row>
       
       
       
       
    </Container>
  );
}

export default Introducation;