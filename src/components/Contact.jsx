import"../style/Contact.css"

const Contact = () => {
  return (
    <section id="5" className="cinco">
      <h2 className="container-contact-h2">contacto</h2>
      <div className="container-from">
      <form action="mailto:fabianavb22@gmail.com" method="post"  to-netlify="true">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo Electronico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="2"></textarea>
        <button type="submit" value="enviar">Enviar</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
