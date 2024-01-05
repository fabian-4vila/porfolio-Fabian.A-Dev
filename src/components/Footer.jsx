import "../style/Footer.css"
import UpButton from "./scripts/UpButton"

const Footer = () => {
  return (
    <section className="seis">
    <div className="container-footer">
        <UpButton/>
    <p>&copy; 2023 Fabian Avila. Todos los derechos reservados.</p>
    </div>
    </section>
  )
}

export default Footer