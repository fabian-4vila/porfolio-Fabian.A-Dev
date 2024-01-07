import "../style/Experience.css"
import ImgEfec from "./scripts/ImgEfec";

const Experience = () => {
  const exp = [
    {
      titulo: "pagina de pokemon:",
      parrafo: "Desarrollé una plataforma interactiva para explorar información detallada sobre Pokémon, con una interfaz atractiva.",
      imagen: "/pokemon.png",
      id: "1",
      url:"https://pokemon-page-by-fabian-4avila.netlify.app",
      codigo:"https://github.com/fabian-4vila/entre5-gen29"
    },
    {
      titulo: "Página de serie de Rick y Morty:",
      parrafo: "Diseñé un sitio divertido y visualmente atractivo que recopila datos sobre los personajes de la serie.",
      imagen: "/rick y morty.png",
      id: "2",
      url:"https://rick-y-morty-by-fabian-avila.netlify.app",
      codigo:"https://github.com/fabian-4vila/entre3-gen29"
    },
    {
      titulo: "API de Ecommerce:",
      parrafo: "API de comercio con funciones seguridad y autenticación. Permite realizar operaciones CRUD en productos.",
      imagen: "/api.png",
      id: "3",
      url:"https://documenter.getpostman.com/view/30755566/2s9YeG6BQ3",
      codigo:"https://github.com/fabian-4vila/Proyecto-Final"
    },
  ];

  return (
    <section id="3" className="tres">
      <h2>Experiencia</h2>
      {exp.map((expItem) => (
        <div className="container-exp" key={expItem.id}>
          <h3>{expItem.titulo}</h3>
          <ImgEfec src={expItem.imagen} alt={expItem.titulo}/>
          <p>{expItem.parrafo}</p>
          <a className="an-1" href={expItem.url}>sitio</a>
          <a className="an-2" href={expItem.codigo}>codigo</a>
        </div>
      ))}
    </section>
  );
};

export default Experience;
