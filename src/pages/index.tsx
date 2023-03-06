import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";
import Head from "next/head";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme) {
      window.document.documentElement.className = localStorageTheme === "dark" ? "dark" : "";
    } else {
      window.document.documentElement.className = "";
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <main className="min-h-screen bg-light-gray dark:bg-darker-blue text-darker-blue transition-colors duration-300 dark:text-white flex flex-col gap-8">
      <Head>
        <title>Choaib Mouhrach / A Full-Stack Developer</title>
        <meta
          name="description"
          content="I am a full-stack developer located in Casablanca, Morocco, and I am currently freelancing with several clients. My expertise lies in the MEAN stack, and I have extensive experience as a full-stack developer..."
        />
      </Head>
      <Nav />
      {/* Hero */}
      <Hero />
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
      {/* Social media */}
      <SocialMedia />
    </main>
  );
};

export default Index;
