import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <Hero />
      {/* Who I'm i ? */}
      <AboutMe />
      {/* Projects i made */}
      <Projects />
      {/* Reach out to me */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
