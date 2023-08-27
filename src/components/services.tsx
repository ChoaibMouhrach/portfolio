import {
  FileMinus2,
  FolderKanban,
  Globe,
  PlaneLanding,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import Section from "./section";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Crafting dynamic and user-friendly web apps with cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating responsive and feature-rich mobile apps for iOS and Android.",
  },
  {
    icon: FileMinus2,
    title: "WordPress Development",
    description:
      "Designing optimized WordPress websites for easy content management.",
  },
  {
    icon: PlaneLanding,
    title: "Landing Page Development",
    description: "Building captivating landing pages to drive user engagement.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Empowering businesses with comprehensive e-commerce strategies.",
  },
  {
    icon: FolderKanban,
    title: "Management Solutions",
    description:
      "Providing effective management solutions for streamlined operations.",
  },
];

export default function Services() {
  return (
    <Section
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      title="Enhance your business through the utilization of our services."
      description="Elevate your business with the transformative capabilities of our services. Our offerings are designed to empower your operations, enabling you to reach new heights of success. Let us be your partner in growth and innovation, as we work together to achieve your business goals."
    >
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`px-4 py-8 rounded-lg border border-primary flex flex-col gap-4 ${
            index % 2 !== 0 ? "bg-primary" : undefined
          }`}
        >
          <div className={`${index % 2 !== 0 ? "text-white" : "text-primary"}`}>
            <service.icon className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <p
              className={`font-semibold ${
                index % 2 !== 0 ? "text-white" : undefined
              }`}
            >
              {service.title}
            </p>
            <p
              className={`${
                index % 2 !== 0 ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </Section>
  );
}
