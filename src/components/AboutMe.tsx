import { FaLaravel } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="bg-light-black min-h-screen flex items-center" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-8 lg:gap-32 text-center lg:text-start">
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" text-4xl lg:text-8xl font-extrabold tracking-wide"
            >
              A LITTLE ABOUT ME ?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </motion.p>
          </div>
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 90 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-8xl font-extrabold tracking-wide"
            >
              WHAT ABOUT
              <br className="lg:hidden" /> MY SKILLS ?
            </motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {[0, 0, 0, 0, 0, 0, 0, 0].map((e: number, i: number) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    transition={{ duration: 0.6, delay: 0.4 + 0.2 * i, default: { ease: "easeOut" } }}
                    whileInView={{ opacity: 1, y: 0 }}
                    key={i}
                    className="text-5xl bg-black rounded-sm h-32 flex items-center justify-center text-primary"
                  >
                    <FaLaravel />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
