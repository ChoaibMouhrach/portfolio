import React from "react";

const Title = ({ white_title, branded_title, className }) => {
  return (
    <h2
      className={`font-extrabold text-white text-2xl my-3 ${className ?? ""}`}
    >
      {white_title} <span className="text-brand-color">{branded_title}</span>
    </h2>
  );
};

export default Title;
