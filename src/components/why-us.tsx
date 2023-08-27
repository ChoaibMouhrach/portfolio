import { BadgeHelp, Palette, Search, Server } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="container grid gap-16 lg:grid-cols-3">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-extrabold tracking-wide">
          How Can We Help You? Your Vision, Our Expertise.
        </h3>
        <p className="text-gray-700">
          At YeraCode, we&apos;re committed to turning your digital dreams into
          reality. Our team is poised to collaborate with you and understand
          your unique challenges, aspirations, and goals. Whether you&apos;re
          seeking to streamline operations, boost efficiency, or create a
          cutting-edge software solution, we&apos;re here to help.
        </p>
      </div>
      <div className="lg:col-start-2 lg:col-end-4 gap-8 grid sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="bg-primary rounded-full p-4 w-fit">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-md">Design & Development</p>
            <p>
              Our experts fuse creativity with technology, designing and
              developing tailor-made solutions that exceed your expectations.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-primary rounded-full p-4 w-fit">
            <Search className="w-5 h-5 text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-md">Discovery</p>
            <p>
              We begin by diving deep into your vision, meticulously analyzing
              your requirements to uncover the optimal path forward.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-primary rounded-full p-4 w-fit">
            <BadgeHelp className="w-5 h-5 text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-md">Ongoing Support</p>
            <p>
              Our partnership doesn&apos;t end at launch. We&apos;re here to
              provide continuous support, updates, and adaptations as your
              business evolves.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-primary rounded-full p-4 w-fit">
            <Server className="w-5 h-5 text-white" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-md">Deployment</p>
            <p>
              With a focus on seamless integration, we ensure your software
              takes off smoothly, ready to empower your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
