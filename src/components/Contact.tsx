import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="h-fit bg-light-black min-h-screen flex items-center" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle>REACH OUT ?</SectionTitle>
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} className=" flex items-center pb-8">
          <form className="grid grid-cols-1 gap-4  w-full">
            <motion.input
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="p-4 bg-black rounded-sm"
              placeholder="Email Address..."
              type="text"
            />
            <motion.input
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="p-4 bg-black rounded-sm"
              placeholder="Email Address..."
              type="text"
            />
            <motion.textarea
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="p-4 bg-black rounded-sm"
              placeholder="Email Address..."
              rows={15}
            ></motion.textarea>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
              <Button>SEND</Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
