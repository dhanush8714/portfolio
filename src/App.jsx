import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;