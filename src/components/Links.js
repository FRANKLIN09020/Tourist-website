import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Row} from 'react-bootstrap';

const Links = () => {
  return (
     <Container>
<Row>
    <Col>
    <Nav className="justify-content-center mt-4 p-4" >
        <Nav.Item>
          <Nav.Link  className='text-center' id="head">Tourist Places To Tamil Nadu <br/> Here Are The top Places to Visit In Tamil Nadu In 2023</Nav.Link>
        </Nav.Item>
    </Nav>
    <Nav class="d-flex justify-content-evenly">
    <Nav.Item>
          <Nav.Link href='#Chennai' className='mx-3' id="nav1">Chennai</Nav.Link>
          <Nav.Link href='#Rameshwaram'  id="nav1" >Rameshwaram</Nav.Link>
        </Nav.Item>
        <Nav.Item  >
          <Nav.Link href='#Kodaikkanal'  id="nav1" >Kodaikkanal</Nav.Link>
          <Nav.Link href='#Ooty'  className='mx-3' id="nav1">Ooty</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link href='#Madurai' className='mx-3'  id="nav1">Madurai</Nav.Link>
          <Nav.Link href='#Kanyakumari'  id="nav1">Kanyakumari</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#Kumbakonam'  id="nav1">Kumbakonam</Nav.Link>
          <Nav.Link href='#Yercaud' className='mx-3'  id="nav1">Yercaud</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#Theni' className='mx-3' id="nav1">Theni</Nav.Link>
          <Nav.Link href='#Hongenakkal'  id="nav1">Hongenakkal</Nav.Link>
        </Nav.Item>
        </Nav>
    </Col>
   
</Row>
   
</Container>
   
  );
}

export default Links;