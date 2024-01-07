import React from "react";

const Descarga = ({ file }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name; // Usamos el nombre del archivo del objeto
    link.click();
  };
  const uniqueClass = `button-${file.id}`;
  return (
    <button className={uniqueClass} onClick={handleDownload}>Descargar {file.id}</button>
  );
};

export default Descarga;
