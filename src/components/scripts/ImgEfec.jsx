import React, { useRef, useState } from 'react';


const ImgEfec = ({ src, alt }) => {
  const imagenRef = useRef(false);
  const [transform, setTransform] = useState('perspective(1000px)rotateX(0deg) rotateY(0deg) sacale(1,1,1)');

  const moverImagen = (event) => {
    const imagen = imagenRef.current;
    if (!imagen) return;

    const ancho = imagen.clientWidth;
    const alto = imagen.clientHeight;
    const offsetX = (event.nativeEvent.offsetX - ancho / 2) / ancho;
    const offsetY = (event.nativeEvent.offsetY - alto / 2) / alto;
    const rotacionX = offsetY * -25;
    const rotacionY = offsetX * 25;
    const escala = 1 + Math.abs(offsetX * 0.02);

    setTransform(`perspective(1000px) rotateX(${rotacionX}deg) rotateY(${rotacionY}deg) scale3d(${escala}, ${escala}, ${escala})`);
  };

  const resetImagen = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  };

  return (
    <div className="container-exp2-con1" onMouseMove={moverImagen} onMouseOut={resetImagen}>
      <img
        className="container-exp2-img"
        ref={imagenRef}
        src={src}
        alt={alt}
        style={{ transform }}
      />
    </div>
  );
};

export default ImgEfec;
