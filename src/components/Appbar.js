import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Appbar = () => {
  return (
    <Navbar expand="lg" id="nav">
    <Container >
        <Navbar.Brand href="#home" className="d-flex justify-content-center" id="head2">TAMILNADU TOURISAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  >  
        <Col className='d-flex justify-content-end'> 
          <Nav  >
            <Nav.Link href="#" className="font-weight-bold " id="nav2">Home</Nav.Link>
            <Nav.Link href="#" className="font-weight-bold " id="nav2">Places To Visit</Nav.Link>
            <Nav.Link href="#" className="font-weight-bold" id="nav2">Best Time To Visit</Nav.Link>
            <Nav.Link href="#" className="font-weight-bold  " id="nav2">Packages</Nav.Link>
            <Nav.Link href="#" className="font-weight-bold  " id="nav2">Destination</Nav.Link>
            <Nav.Link href="#" className="font-weight-bold " id="nav2">Food</Nav.Link>
          </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;