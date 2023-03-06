import React from "react";
import { FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="fixed right-0 bottom-0 hidden lg:flex gap-4 items-center flex-col mx-4 lg:mx-16">
      <FaGithubAlt className="text-2xl " />
      <div className="bg-darker-blue dark:bg-white h-32 w-1 rounded-t-full"></div>
    </div>
  );
};

export default SocialMedia;
