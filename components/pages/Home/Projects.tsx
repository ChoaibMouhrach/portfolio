import { ProjectCard } from "@/components/ui";
import { projects } from "@/constants";

export const Projects = () => {
  return (
    <section className="container px-4 lg:px-0 mx-auto grid lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </section>
  );
};
