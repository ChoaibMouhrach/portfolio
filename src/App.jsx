import Projects from "./componentes/Projects";
import Hero from "./componentes/Hero";
import Experience from "./componentes/Experience";
import Hobbies from "./componentes/Hobbies";
import Reviews from "./componentes/Reviews";
import About from "./componentes/About";
import Contact from "./componentes/Contact";

const App = () => {
  return (
    <div className="App min-h-screen w-full font-body font-medium text-gray bg-black px-4 lg:p-0">
      <Hero />
      <Projects />
      <Experience />
      <Hobbies />
      <Reviews />
      <About />
      <Contact />
    </div>
  );
};

export default App;
