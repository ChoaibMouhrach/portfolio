import { Skill } from "@/interfaces/skills";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiJest, SiNextdotjs, SiTurborepo } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

export const skillsConstant: Skill[] = [
  {
    name: "JEST",
    icon: SiJest,
  },
  {
    name: "DOCKER",
    icon: FaDocker,
  },
  {
    name: "React JS",
    icon: FaReact,
  },
  {
    name: "TYPESCRIPT",
    icon: BiLogoTypescript,
  },
  {
    name: "NODE JS",
    icon: FaNodeJs,
  },
  {
    name: "NEXT JS",
    icon: SiNextdotjs,
  },
  {
    name: "EXPRESS JS",
    icon: SiExpress,
  },
  {
    name: "MYSQL",
    icon: TbBrandMysql,
  },
  {
    name: "MONGO DB",
    icon: DiMongodb,
  },
  {
    name: "TURBO REPO",
    icon: SiTurborepo,
  },
];
