import React from 'react'

const NavBar = () => {

  const estilosNav = {backgroundColor: 'black', listStyle: 'none'}
  const li = {display: 'inline-block', padding: '10px', color: 'white'}
  return (
    <div className='NavBar' >
      <div>
        <img src="" alt="" />
      </div>
      <ul style = {estilosNav}>
        <a href="#" target="_blank"><li style={li}>INICIO</li></a>
        <a href="#" target="_blank"><li style={li}>QUIENES SOMOS</li></a>
        <a href="#" target="_blank"><li style={li}>CURSOS</li></a>
        <a href="#" target="_blank"><li style={li}>CONTACTO</li></a>
        <a href="#" target="_blank"><li style={li}>TRABAJA CON NOSOTROS</li></a>
        
      </ul>
    </div>
  )
}

export default NavBar


