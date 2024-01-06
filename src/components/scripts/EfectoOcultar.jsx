import React, { useState, useEffect } from 'react';

const EfectoOcultar = ({ children, minWidth }) => {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [mostrarFabian, setMostrarFabian] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setAnchoPantalla(width);

      if (width <= minWidth) {
        setMostrarFabian(true);
      } else {
        setMostrarFabian(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minWidth]);

  return mostrarFabian ? <div className='cero-1'>Fabian AB | Dev</div> : children;
};

export default EfectoOcultar;
