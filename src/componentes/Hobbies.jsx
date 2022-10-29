import React from "react";
import Title from "./Title";
import projectPlaceholder from "../assets/project-placeholder.svg";
import hobbie1 from "../assets/hobbie1.jpg";

const Hobbies = () => {
  return (
    <div className="container mx-auto pb-6">
      <Title white_title={"Things i like to"} branded_title={"do"} />

      <div className="grid  lg:grid-cols-3 gap-4">
        <div className="relative">
          <img src={projectPlaceholder} alt="" />
          <div className="bg-[rgba(0,0,0,0.8)] top-0 absolute w-full h-full flex items-end justify-center text-white font-extrabold">
            <span className="m-5 text-xl drop-shadow-lg">TECH</span>
          </div>{" "}
        </div>
        <div className="relative">
          <img src={projectPlaceholder} alt="" />
          <div className="bg-[rgba(0,0,0,0.8)] top-0 absolute w-full h-full flex items-end justify-center text-white font-extrabold">
            <span className="m-5 text-xl drop-shadow-lg">READING</span>
          </div>{" "}
        </div>
        <div className="relative">
          <img src={projectPlaceholder} alt="" />
          <div className="bg-[rgba(0,0,0,0.8)] top-0 absolute w-full h-full flex items-end justify-center text-white font-extrabold">
            <span className="m-5 text-xl drop-shadow-lg">BLOGGING</span>
          </div>
        </div>
        <div className="relative">
          <img src={projectPlaceholder} alt="" />
          <div className="bg-[rgba(0,0,0,0.8)] top-0 absolute w-full h-full flex items-end justify-center text-white font-extrabold">
            <span className="m-5 text-xl drop-shadow-lg">WATCHING MOVIES</span>
          </div>
        </div>
        <div className="relative  lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 ">
          <img
            src={hobbie1}
            className="w-full max-h-[200px] h-full object-cover lg:max-h-max	"
            alt=""
          />
          <div className="bg-[rgba(0,0,0,0.8)] top-0 absolute w-full h-full flex items-end justify-center text-white font-extrabold">
            <span className="m-5 text-xl drop-shadow-lg">GAMING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
