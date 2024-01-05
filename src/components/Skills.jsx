
const Skills = () => {
    const iconos = [
        { id: "10", nombre: 'HTML', imagen: '/html.png' },
        { id: "11", nombre: 'CSS', imagen: '/css.png' },
        { id: "12", nombre: 'Js', imagen: '/js.png' },
        { id: "13", nombre: 'Python', imagen: '/python.png' },
        { id: "14", nombre: 'React', imagen: '/react.png' },
        { id: "15", nombre: 'NodeJs', imagen: '/nodejs.png' },
        { id: "16", nombre: 'Postgresql', imagen: '/postgresql.png' },
        { id: "17", nombre: 'Jest', imagen: '/jest.png' },
        { id: "18", nombre: 'Git', imagen: '/git.png' },
        { id: "19", nombre: 'GitHub', imagen: '/github.png' }
      ];
      
  return (
    <ul>
        {iconos.map((iconos) => (
            <li iconos={iconos} key={iconos.id}>
                <span>
                    <img src={iconos.imagen} alt={iconos.nombre} />
                </span>
                    <p>{iconos.nombre}</p>
            </li>
        ))}
    </ul>
  )
}

export default Skills