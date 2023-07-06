import { Project } from "@/interfaces/project";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      target="_blank"
      href={project.github}
      className="bg-gray-800 rounded-md overflow-hidden"
    >
      {"image" in project ? (
        <Image
          src={project.image}
          alt={project.name}
          className="h-64 object-cover"
          width="1920"
          height="1080"
        />
      ) : (
        <div className="h-64 bg-gray-700 flex items-center justify-center">
          <span className="text-xl font-semibold tracking-wide">SOON</span>
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <div className="flex gap-2 overflow-x-scroll scroll-bar pb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-sm font-semibold tracking-wide bg-gray-700 p-2 rounded-md whitespace-nowrap	"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="font-bold text-xl tracking-wide">{project.name}</span>
        <p className="leading relaxed">{project.description}</p>
        <div className="flex items-center gap-2 text-lg">
          More <MdOutlineArrowRightAlt />
        </div>
      </div>
    </Link>
  );
};
