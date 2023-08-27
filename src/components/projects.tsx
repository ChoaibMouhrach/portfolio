import Image from "next/image";
import landingPage from "../../public/project.png";
import Section from "./section";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Enhancement",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Healthcare Data Management System",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
  },
  {
    id: 3,
    title: "Smart Home Automation App",
    technologies: ["Flutter", "Python", "AWS IoT", "RESTful API"],
  },
];

export default function Projects() {
  return (
    <Section
      className="grid lg:grid-cols-3 gap-8"
      title="Our Innovative Solutions."
      description="Discover a selection of our finest software development projects that embody creativity, functionality, and success. Dive into a world where innovation meets practicality as we present how our solutions have addressed unique challenges and exceeded expectations."
    >
      {projects.map((project, index) => (
        <div key={project.id} className="rounded-lg">
          <div className="h-96">
            <Image
              src={landingPage}
              alt="project"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            <p className="font-semibold tracking-wide text-lg">
              {project.title}
            </p>
            <div className="flex items-center flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <div
                  className="text-xs bg-gray-100 text-primary py-2 px-4 rounded-md"
                  key={tech}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
