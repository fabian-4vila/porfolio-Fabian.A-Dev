import "../style/Experience.css"
import ImgEfec from "./scripts/ImgEfec";

const Experience = () => {
  const exp = [
    {
      titulo: "pagina de pokemon:",
      parrafo: "Desarrollé una plataforma interactiva para explorar información detallada sobre Pokémon, con una interfaz atractiva.",
      imagen: "/pokemon.png",
      id: "1",
    },
    {
      titulo: "Página de personajes de Rick y Morty:",
      parrafo: "Diseñé un sitio divertido y visualmente atractivo que recopila datos sobre los personajes de la serie.",
      imagen: "/rick y morty.png",
      id: "2",
    },
    {
      titulo: "API de Ecommerce:",
      parrafo: "API de comercio electrónico con funciones avanzadas de seguridad y autenticación. Permite realizar operaciones CRUD en productos, cuenta con un historial de compras y características de filtrado para una experiencia protegida.",
      imagen: "/api.png",
      id: "3",
    },
  ];

  return (
    <section className="tres">
      <h2>Experiencia</h2>
      {exp.map((expItem) => (
        <div className="container-exp" key={expItem.id}>
          <h3>{expItem.titulo}</h3>
          <ImgEfec src={expItem.imagen} alt={expItem.titulo}/>
          <p>{expItem.parrafo}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
