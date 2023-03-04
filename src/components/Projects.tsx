import Image from "next/image";
import Button from "./Button";
import Screen from "./Screen";
import project from "../../public/project.png";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-screen" id="projects">
      <div className="container mx-auto px-4">
        <SectionTitle>PROJECTS I DID ?</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-8 lg:gap-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Screen>
              <Image className="h-full w-full object-cover object-left" src={project} alt="" />
            </Screen>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <h3 className="text-2xl lg:text-6xl font-extrabold text-center tracking-wide">POSITION OF SALES</h3>
            <p className="leading-loose text-center lg:text-start">
              A web-based point of sale (POS) is a software application that enables businesses to process transactions and manage sales through a web browser,
              without the need for specialized hardware or software. The web-based POS typically includes features such as inventory management, order
              processing, customer management, reporting and analytics, and payment processing. It is accessible from any device with an internet connection,
              allowing retailers to sell their products or services online or in-store, and track sales across multiple channels. With a web-based POS,
              businesses can streamline their sales process, reduce errors, and improve customer experience.
            </p>
            <div className="flex gap-4">
              <Button>CODE</Button>
              <Button>PREVIEW</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Screen>
              <Image className="h-full w-full object-cover object-left" src={project} alt="" />
            </Screen>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-4 "
          >
            <h3 className="text-2xl lg:text-6xl font-extrabold text-center tracking-wide">PROJECTS I DID ?</h3>
            <p className="leading-loose text-center lg:text-start">
              A web-based point of sale (POS) is a software application that enables businesses to process transactions and manage sales through a web browser,
              without the need for specialized hardware or software. The web-based POS typically includes features such as inventory management, order
              processing, customer management, reporting and analytics, and payment processing. It is accessible from any device with an internet connection,
              allowing retailers to sell their products or services online or in-store, and track sales across multiple channels. With a web-based POS,
              businesses can streamline their sales process, reduce errors, and improve customer experience.
            </p>
            <div className="flex gap-4">
              <Button>CODE</Button>
              <Button>PREVIEW</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Screen>
              <Image className="h-full w-full object-cover object-left" src={project} alt="" />
            </Screen>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <h3 className="text-2xl lg:text-6xl font-extrabold text-center tracking-wide">PROJECTS I DID ?</h3>
            <p className="leading-loose text-center lg:text-start">
              A web-based point of sale (POS) is a software application that enables businesses to process transactions and manage sales through a web browser,
              without the need for specialized hardware or software. The web-based POS typically includes features such as inventory management, order
              processing, customer management, reporting and analytics, and payment processing. It is accessible from any device with an internet connection,
              allowing retailers to sell their products or services online or in-store, and track sales across multiple channels. With a web-based POS,
              businesses can streamline their sales process, reduce errors, and improve customer experience.
            </p>
            <div className="flex gap-4">
              <Button>CODE</Button>
              <Button>PREVIEW</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
