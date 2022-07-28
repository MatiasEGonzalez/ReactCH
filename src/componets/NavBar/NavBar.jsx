import React from 'react'
import Cartwidget from './Cartwidget/Cartwidget';
import { Link, NavLink } from 'react-router-dom';
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
            <Navbar.Brand href="#"><img src='/Imagenes/logoE.jpeg' alt="logo" className='w-50'/></Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/'  className='m-2'>INICIO </NavLink>
            <NavLink to='/list' className='m-2'>CURSOS </NavLink>
            <NavLink to='/' className='m-2'>CONTACTO </NavLink>
            <NavLink to='/' className='m-2'>TRABAJA CON NOSOTROS </NavLink>
            <NavLink to='/' className='m-2'>QUIENES SOMOS </NavLink>
            
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


