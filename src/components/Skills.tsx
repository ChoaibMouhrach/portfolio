import { FaNodeJs, FaPython } from "react-icons/fa";
import Title from "./Title";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 lg:px-0 ">
      <Title>SKILLS</Title>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="lg:col-start-1 lg:col-end-3 h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaPython className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaNodeJs className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaPython className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaNodeJs className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaPython className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaNodeJs className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaPython className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="lg:col-start-3 lg:col-end-5 h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaNodeJs className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaPython className="text-5xl" />
          <span>camado</span>
        </div>
        <div className="h-32 bg-white  dark:bg-dark-blue p-4 rounded-md flex gap-2 flex-col items-center justify-center">
          <FaNodeJs className="text-5xl" />
          <span>camado</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
