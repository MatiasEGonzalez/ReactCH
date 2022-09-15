import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './Cartwidget/Cart/Cart';
import Cartwidget from './Cartwidget/Cartwidget';
import { useCartContext } from '../../Context/CartContext';


const NavBar = (props) => {

  const { cantidadTotal } = useCartContext()
  return (
  
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Link to='/list'>
            <Navbar.Brand >
              <img src='../../../Imagenes/logoE.jpeg' alt="logoCarrito" className='w-50'/>
            </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/list'  className='m-2 nav-link'>INICIO </NavLink>
            
            <NavLink to='/' className='m-2 nav-link'>CONTACTO </NavLink>
            <NavLink to='/' className='m-2 nav-link'>POSTULATE</NavLink>
            <NavLink to='/' className='m-2 nav-link'>QUIENES SOMOS </NavLink>
            
            <NavDropdown title="Cursos" id="basic-nav-dropdown" className='m-1 nav-link'>

              
              <NavDropdown.Item  ><NavLink to='/categoria/Idiomas' className='m-2 nav-link'>Idiomas </NavLink></NavDropdown.Item>
              <NavDropdown.Item  ><NavLink to='/categoria/Finanzas' className='m-2 nav-link'>Finanzas </NavLink></NavDropdown.Item>
              <NavDropdown.Item  ><NavLink to='/categoria/Informatica' className='m-2 nav-link'>Informatica </NavLink></NavDropdown.Item>
              <NavDropdown.Item  ><NavLink to='/categoria/Programacion y Desarrollo' className='m-2 nav-link'>Programacion y Desarrollo </NavLink></NavDropdown.Item>
                            
            </NavDropdown>
            
          </Nav>
          <Link to='/Cart' >
            <div className="d-flex justify-content-end ">
            <Cartwidget />
            {cantidadTotal() != 0 && cantidadTotal()}
            </div>
          </Link>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}



export default NavBar


