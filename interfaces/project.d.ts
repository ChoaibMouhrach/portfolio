import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  description: string;
  github: string;
  techs: string[];
} & (
  | {
      state: "Completed" | "Ongoing";
      image: StaticImageData;
    }
  | {
      state: "Soon";
    }
);
