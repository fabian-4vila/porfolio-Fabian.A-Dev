import "./style/Reset.css";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
