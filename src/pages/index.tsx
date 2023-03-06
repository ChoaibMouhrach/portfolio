import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ImSpinner10 } from "react-icons/im";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme) {
      window.document.documentElement.className = localStorageTheme === "dark" ? "dark" : "";
    } else {
      window.document.documentElement.className = "";
      localStorage.setItem("theme", "light");
    }

    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <main className="min-h-screen bg-light-gray dark:bg-darker-blue text-darker-blue  dark:text-white flex flex-col gap-8">
      <Head>
        <title>Choaib Mouhrach / A Full-Stack Developer</title>
        <meta
          name="description"
          content="Choaib Mouhrach a full-stack ( front-end && back-end ) developer located in Casablanca, Morocco, and I am currently freelancing with several clients. My expertise lies in the MEAN stack, and I have extensive experience as a full-stack developer..."
        />
      </Head>
      {loading ? (
        <div className="text-6xl text-white bg-primary h-screen w-screen flex items-center justify-center">
          <ImSpinner10 className="animate-spin" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};

export default Index;
