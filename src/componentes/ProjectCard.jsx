import React from "react";

import projectPlaceholder from "../assets/project-placeholder.svg";

const ProjectCard = () => {
  return (
    <div className="lg:h-[360px] flex items-end drop-shadow-xl">
      <div className="p-2 lg:p-4 grid lg:grid-cols-3 rounded bg-light-black lg:gap-8">
        <div className=" lg:col-start-1 lg:col-end-2 lg:relative">
          <img
            src={projectPlaceholder}
            className="max-w-full rounded drop-shadow-xl object-cover lg:absolute lg:bottom-0 w-full h-80"
            alt=""
          />
        </div>
        <div className="lg:col-start-2 lg:col-end-4 ">
          <h3 className="text-white my-2">
            Project <span className="text-brand-color">Number 1</span>
          </h3>
          <p className="text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            nisi explicabo fuga a, dolorem officia ratione ab quibusdam nulla
            quisquam, nesciunt necessitatibus dolore dignissimos vero doloribus
            sed cupiditate vitae saepe.
          </p>
          <div className="flex gap-4 py-3">
            <button className="bg-brand-color drop-shadow-lg text-white p-1 px-3 rounded">
              Code
            </button>
            <button className="bg-brand-color drop-shadow-lg text-white p-1 px-3 rounded">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
