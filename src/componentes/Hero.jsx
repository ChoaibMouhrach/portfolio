import React from "react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="h-[60vh]">
      <Nav />
      <div className="container mx-auto h-[calc(60vh_-_80px)] flex justify-center flex-col gap-4 ">
        <div className="text-2xl md:w-[80%] text-center  md:text-left md:text-4xl lg:text-6xl font-bold ">
          HI! IM <span className="text-brand-color">CHOAIB MOUHRACH</span> A{" "}
          <span className="text-brand-color">FULL-STACK DEVELOPER</span> AND
          <span className="text-brand-color"> UI / UX DESIGNER</span> BASED IN{" "}
          MOROCCO NORTH <span className="text-brand-color">AFRICA</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
