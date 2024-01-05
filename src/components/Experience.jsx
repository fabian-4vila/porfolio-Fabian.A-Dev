const Experience = () => {
    const exp = [
        {
          titulo: "pagina de pokemon:",
          parrafo:
            "Desarrollé una plataforma interactiva para explorar información detallada sobre Pokémon, con una interfaz atractiva.",
          imagen: "/pokemon.png",
          id: "1",
        },
        {
          titulo: "Página de personajes de Rick y Morty:",
          parrafo:
            "Diseñé un sitio divertido y visualmente atractivo que recopila datos sobre los personajes de la serie.",
          imagen: "/rick y morty.png",
          id: "2",
        },
        {
          titulo: "API de Ecommerce:",
          parrafo:
            "API de comercio electrónico con funciones avanzadas de seguridad y autenticación. Permite realizar operaciones CRUD en productos, cuenta con un historial de compras y características de filtrado para una experiencia protegida.",
          imagen: "/api.png",
          id: "3",
        },
      ];
    
  return (
    <div>
      {exp.map((exp) => (
        <div exp={exp} key={exp.id}>
          <h3>{exp.titulo}</h3>
          <p>{exp.parrafo}</p>
          <img src={exp.imagen} alt={exp.titulo} />
        </div>
      ))}
    </div>
  );
};

export default Experience;
