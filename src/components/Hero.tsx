import Link from "next/link";

const Hero = () => {
  return (
    <section className="container px-4 lg:px-0 mx-auto min-h-screen flex flex-col gap-4 text-center items-center justify-center py-24">
      <p className="text-primary">Websites for clients with taste</p>
      <h1 className="text-2xl md:max-w-xl md:text-4xl lg:max-w-2xl lg:text-5xl xl:max-w-5xl xl:text-6xl font-extrabold uppercase">
        Success consists of going from failure to failure without loss of enthusiasm.
      </h1>
      <p className="max-w-xl lg:max-w-4xl tracking-wide">
        Choaib Mouhrach a full-stack developer located in Casablanca, Morocco, and I am currently freelancing with several clients. My expertise lies in the
        MEAN stack, and I have extensive experience as a full-stack developer.
      </p>
      <div className="flex lg:flex-row flex-col gap-4">
        <Link className="py-2 px-4 rounded-md text-white bg-primary" href="#contact">
          LET'S TALK
        </Link>
        <Link className="py-2 px-4 rounded-md text-white bg-primary" href="#contact">
          DOWNLOAD RESUME
        </Link>
      </div>
    </section>
  );
};

export default Hero;
