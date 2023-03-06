import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 lg:px-0 flex flex-col gap-4 ">
      <Title>PROJECTS</Title>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default Projects;
