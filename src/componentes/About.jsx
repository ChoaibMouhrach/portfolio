import React from "react";
import projectPlaceholder from "../assets/project-placeholder.svg";
import Title from "./Title";
const About = () => {
  return (
    <div className="container mx-auto pb-6">
      <Title white_title={"About"} branded_title={"Me"} />
      <div className="flex justify-center lg:mt-40">
        <div className="grid lg:grid-cols-3 bg-light-black lg:max-w-[50%] rounded">
          <div className=" lg:col-start-1 lg:col-end-2 lg:relative p-2 lg:p-0">
            <img
              src={projectPlaceholder}
              className="lg:absolute bottom-5 left-0 lg:-translate-x-5 drop-shadow-xl rounded  object-cover h-96  "
              alt=""
            />
          </div>
          <div className=" lg:col-start-2 lg:col-end-4 p-4 ">
            <h3 className="text-brand-color my-3 text-xl">Mouhrach Choaib</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              laboriosam dolorum rerum culpa voluptates libero perspiciatis
              provident. Illum, ipsam vel quisquam explicabo eaque veritatis
              vitae nulla magni rem quasi facilis ex saepe blanditiis enim
              voluptates vero non ad assumenda dolorum nisi laborum voluptate
              labore aperiam similique! Quasi eligendi beatae laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
