import Camado from "@/public/camado.jpg";
import { MdOutlineArrowDownward } from "react-icons/md";
import { Button } from "./Button";
import Image from "next/image";
import { LinkButton } from "./LinkButton";

export const Hero = () => {
  return (
    <section className="container p-4 lg:p-0 mx-auto min-h-[80vh] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
      <div className="flex items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="lg:text-xl">Choaib Mouhrach</span>
            <h1 className="text-4xl lg:text-6xl font-semibold">
              A <u>Web Developer</u> that will take care of your projects
            </h1>
            <span className="lg:text-xl">And help you achieve your goals</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkButton target="_blank" href="/ChoaibMouhrachCV.pdf">
              <MdOutlineArrowDownward /> Download resume
            </LinkButton>
            <LinkButton target="_blank" href="https://github.com/pacy2">
              Github
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="row-start-1 lg:col-start-2 flex items-center justify-center lg:justify-end">
        <Image
          src={Camado}
          className="w-full h-full lg:w-96 lg:h-96 lg:rounded-full border-4 border-gray-700"
          alt="Picture of me"
          width="1920"
          height="1080"
        />
      </div>
    </section>
  );
};
