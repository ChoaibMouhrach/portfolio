import { motion } from "framer-motion";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl lg:text-8xl font-extrabold text-center py-8 tracking-wide"
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
