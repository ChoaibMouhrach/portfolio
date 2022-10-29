import React from "react";
import { SiFiverr } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import Title from "./Title";
const Reviews = () => {
  return (
    <div className="container pb-6 mx-auto">
      <Title white_title={"Clients"} branded_title={"review"} />
      <div className="grid lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((e) => (
          <div className="bg-light-black p-2 rounded drop-shadow-xl">
            <div className="flex items-center justify-between ">
              <span>
                <SiFiverr className="text-4xl text-white" />
              </span>
              <span className="flex items-center text-gold gap-1">
                <span>5</span>
                <AiFillStar />
              </span>
            </div>
            <p className="text-sm lg:text-lg my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, consequuntur. Molestiae, quas eos! Labore, praesentium.
              Magnam odio vero nemo voluptatem!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
