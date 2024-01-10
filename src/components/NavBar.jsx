import React from 'react';
import "../style/NavBar.css"
import EfectoOcultar from "./scripts/EfectoOcultar";

const NavBar = () => {
  return (
    <ul className="cero">
      <div className="container-nav-1"> <img src="/Fabian3.png" alt="icono" /></div>
      <EfectoOcultar minWidth={600}>
          <li className="container-nav"><a href="#1">INICIO</a></li>
          <li className="container-nav"><a href="#3">EXPERIENCIA</a></li>
          <li className="container-nav"><a href="#2">ACERCA DE MI</a></li>
          <li className="container-nav"><a href="#4">HABILIDADES</a></li>
          <li className="container-nav"><a href="#5">CONTACTO</a></li>
      </EfectoOcultar>
    </ul>
  )
}

export default NavBar;
