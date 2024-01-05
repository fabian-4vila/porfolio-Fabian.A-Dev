import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Title from "./components/Title";

function App() {
  

  return (
    <div>
      <aside>
        <NavBar/>
      </aside>
      <section>
        <Title/>
      </section>
      <hr />
      <section>
        <AboutMe/>
      </section>
      <section>
        <Experience/>
      </section>
      <section>
        <Skills/>
      </section>
      
      <hr />
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
