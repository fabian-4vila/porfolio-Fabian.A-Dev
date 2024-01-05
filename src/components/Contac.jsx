

const Contac = () => {
  return (
    <div>
      <h2>contacto</h2>
      <form action="mailto:fabianavb22@gmail.com" method="post">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo Electronico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensaje">Menasaje</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="2"></textarea>
        <button type="submit" value="enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Contac;
