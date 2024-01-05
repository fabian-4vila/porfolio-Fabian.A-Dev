import "./style/Reset.css";
import AboutMe from "./components/AboutMe";
import Contac from "./components/Contac";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Title from "./components/Title";

function App() {
  return (
    <div className="menos">
        <NavBar />
      <section className="uno">
        <Title />
      </section>
      <hr />
      <section className="dos">
        <AboutMe />
      </section>
        <Experience />
        <Skills />
      <hr />
      <section className="cinco">
        <Contac />
      </section>
      <section className="seis">
        <Footer />
      </section>
    </div>
  );
}

export default App;
