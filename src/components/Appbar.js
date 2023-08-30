import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    <Navbar expand="lg" id="container">
    <Container >
        <Navbar.Brand href="#home" className="d-flex justify-content-center" id="head2">TAMILNADU TOURISAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className='d-grid justify-content-start' >  
        <Col className='d-flex justify-content-end'> 
          <Nav>
            <Nav.Link href="#" className="font-weight-bold  " id="nav2"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#" className="font-weight-bold " id="nav2"><Link to="/visit">Places To Visit</Link></Nav.Link>
            <Nav.Link href="#" className="font-weight-bold" id="nav2"><Link to="/Best Time To Visit">Best Time To Visit</Link></Nav.Link>
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