import React from "react";
import Title from "./Title";

const Experience = () => {
  return (
    <div className="container mx-auto pb-6">
      <Title white_title={"My"} branded_title={"My Experiences"} />
      <div className="grid lg:grid-cols-2">
        {[1, 2].map((e) => (
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-light-black w-1 h-[22px]"></div>
              <div className="bg-light-black min-w-[20px] min-h-[20px] rounded-full"></div>
              <div className="bg-light-black w-1 h-full"></div>
            </div>
            <div>
              <span className="bg-brand-color  p-1 px-2 text-md font-semibold text-white rounded my-2 block w-fit">
                OFPPT
              </span>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                quos quidem aperiam id iusto quam ipsam sequi. Rem, repudiandae
                velit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
