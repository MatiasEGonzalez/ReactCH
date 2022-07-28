import React from 'react'
import Cartwidget from './Cartwidget/Cartwidget';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = (props) => {

  const estilosNav = {backgroundColor: 'black', listStyle: 'none'}
  const li = {display: 'inline-block', padding: '10px', color: 'white'}
  return (
  
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Link to='/'>
            Ecommerce MatiasGZ
        </Link>
        <Navbar.Brand href="#"><img src='/Imagenes/logoE.jpeg' alt="logo" className='w-50'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">INICIO</Nav.Link>
            <Nav.Link href="#action1">CURSOS </Nav.Link>
            <Nav.Link href="#action1">CONTACTO</Nav.Link>
            <Nav.Link href="#action1">TRABAJA CON NOSOTROS</Nav.Link>
            <Nav.Link href="#action2">QUIENES SOMOS</Nav.Link>
            
          </Nav>
          <Link to='/Cart'>
            <Cartwidget />
          </Link>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}



export default NavBar


