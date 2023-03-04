import Button from "./Button";
import Nav from "./Nav";
import Screen from "./Screen";
import { TbTriangleFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16">
      {/* h-16 [64px] */}
      <motion.div
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="row-start-1 lg:col-start-2"
      >
        <Nav />
      </motion.div>
      {/* Actual Hero */}
      <div className="min-h-[calc(100vh_-_64px)] py-8 flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 gap-8 lg:gap-32 items-center">
          <div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-4">
              <motion.h1
                transition={{ type: "spring", duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="leading-loose font-extrabold text-lg lg:text-6xl"
              >
                Success is not final, failure is not fatal: it is the courage to continue that counts.
              </motion.h1>
              <motion.p
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="leading-loose"
              >
                I am a full-stack developer located in Casablanca, Morocco, and I am currently freelancing with several clients. My expertise lies in the MEAN
                stack, and I have extensive experience as a full-stack developer.
              </motion.p>
              <motion.div transition={{ type: "spring", duration: 1, delay: 1.4 }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <Button>LET'S TALK</Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            transition={{ type: "spring", duration: 1, delay: 1.2 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="row-start-1 lg:col-start-2"
          >
            <Screen>
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <TbTriangleFilled className="text-[150px] text-primary" />
                  <TbTriangleFilled className="text-[70px] text-light-black absolute" />
                </div>
                <span className="text-xl font-semibold">Just Google It</span>
              </div>
            </Screen>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
