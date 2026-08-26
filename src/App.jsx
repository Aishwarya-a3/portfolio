import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Publication from "./components/Publication";

import "./App.css";

function App() {

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Internship />

        <Projects />
        <Education/>
        <Contact />
        <Publication />

      </main>

    </>
  );
}

export default App;