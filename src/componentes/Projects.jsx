import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "./Title";
const Projects = () => {
  return (
    <div className="min-h-[50vh] pb-6 container mx-auto">
      <div>
        <Title white_title="Insight from" branded_title="My Experience" />
        <div className="grid lg:grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((e) => (
            <ProjectCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
