import React from 'react';
import "../style/NavBar.css"
import EfectoOcultar from "./scripts/EfectoOcultar";

const NavBar = () => {
  return (
    <ul className="cero">
      <div className="container-nav-1"> <img src="/Fabian3.png" alt="icono" /></div>
      <EfectoOcultar minWidth={600}>
          <li className="container-nav">INICIO</li>
          <li className="container-nav">EXPERIENCIA</li>
          <li className="container-nav">SOMRE MI</li>
          <li className="container-nav">HABILIDADES</li>
          <li className="container-nav">CONTACTO</li>
      </EfectoOcultar>
    </ul>
  )
}

export default NavBar;
