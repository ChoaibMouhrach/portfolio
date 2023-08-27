import wave from "../../public/wave.svg";
import Image from "next/image";
import aboutus from "../../public/aboutus.svg";

export default function AboutUs() {
  return (
    <section>
      <Image src={wave} alt="wave" className="w-full translate-y-1" />
      <div className="bg-primary py-16 lg:py-0 text-white">
        <div className="container flex flex-col gap-16">
          <div className="lg:text-center lg:mx-24 flex flex-col gap-2">
            <h3 className="text-2xl lg:text-4xl font-extrabold tracking-wide">
              Informations about us.
            </h3>
            <p className="text-sm text-gray-200">
              Elevate your business with the transformative capabilities of our
              services. Our offerings are designed to empower your operations,
              enabling you to reach new heights of success. Let us be your
              partner in growth and innovation, as we work together to achieve
              your business goals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="md:hidden lg:block">
              <Image src={aboutus} alt="About us vector" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-extrabold tracking-wide">
                  About YeraCode
                </h4>
                <p className="line-clamp-xl">
                  At YeraCode, we are passionate about turning innovative ideas
                  into powerful software solutions that empower businesses to
                  thrive in the digital age. With a focus on excellence,
                  creativity, and cutting-edge technology, we specialize in
                  crafting management solutions, ecommerce apps, and
                  point-of-sale (POS) systems that redefine how businesses
                  operate.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-extrabold tracking-wide">
                  Our Mission
                </h4>
                <p className="line-clamp-xl">
                  Our mission is to bridge the gap between technology and
                  business by providing tailored software solutions that drive
                  growth, streamline operations, and enhance customer
                  experiences. We believe that the right software can
                  revolutionize the way businesses manage their processes,
                  engage with customers, and achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={wave}
        alt="wave"
        className="w-full rotate-180 -translate-y-1"
      />
    </section>
  );
}
