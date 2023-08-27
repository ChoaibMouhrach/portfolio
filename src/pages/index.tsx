import Background from "@/components/background";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import AboutUs from "@/components/about-us";
import Testimonials from "@/components/testimonials";
import Projects from "@/components/projects";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <main className="z-10 relative">
      {/* <Background /> */}
      <div className="relative z-20 flex flex-col gap-32">
        <div>
          <Nav />
          <Hero />
        </div>
        <WhyUs />
        <Services />
        <AboutUs />
        <Testimonials />
        <Projects />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
