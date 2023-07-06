import Eco from "@/public/projects/eco.png";
import Pos from "@/public/projects/pointOfSlaes.jpeg";
import Bloggy from "@/public/projects/bloggy.png";
import Coif from "@/public/projects/coiffure.png";
import UsersManagement from "@/public/projects/usersManagement.png";
import { Project } from "@/interfaces/project";

export const projects: Project[] = [
  {
    name: "Eco",
    description:
      "Eco is an online store for selling building materials it was created to learn nextjs and practice typescript",
    image: Eco,
    github: "https://github.com/PACY2/eco",
    techs: [
      "JEST",
      "DOCKER",
      "TURBO REPO",
      "TYPESCRIPT",
      "EXPRESS",
      "NEXTJS",
      "MYSQL",
    ],
    state: "Ongoing",
  },
  {
    name: "POS",
    description:
      "POS is a modern web application accessible through the internet that offers stock management functionality alongside a contemporary checkout cart. Additionally, it generates PDF receipts and supports barcode scanning",
    image: Pos,
    github: "https://github.com/PACY2/pointOfSale",
    techs: ["PHP", "LARAVEL", "REACT", "MYSQL", "TYPESCRIPT"],
    state: "Completed",
  },
  {
    name: "Bloggy",
    description:
      "Bloggy is a web-based blogging application that provides an intuitive design and an exceptional user experience. It supports features such as tags, categories, profile management, and user administration.",
    image: Bloggy,
    github: "https://github.com/PACY2/bloggy",
    techs: [
      "JEST",
      "DOCKER",
      "TURBO REPO",
      "TYPESCRIPT",
      "EXPRESS",
      "NEXTJS",
      "MYSQL",
    ],
    state: "Completed",
  },
  {
    name: "Coiffure",
    description:
      "Coiffure is a modern static page application that showcases one of the most popular barber shops in France.",
    image: Coif,
    github: "https://github.com/PACY2/coiffure",
    techs: ["REACT", "JAAVASCRIPT"],
    state: "Completed",
  },
  {
    name: "Users management",
    description:
      "The online Laravel application called 'Users Management' provides both authentication and comprehensive user management features.",
    image: UsersManagement,
    github: "https://github.com/PACY2/usersManagement",
    techs: ["PHP", "LARAVEL"],
    state: "Completed",
  },
  {
    name: "Exli",
    description:
      "Exli is a command-line interface (CLI) tool designed specifically for simplifying the process of creating Express.js applications. It offers a streamlined file structure, built-in authentication, and a range of additional functionalities such as generating controllers, models, factories, seeders, and much more.",
    techs: ["EXPRESS", "TYPESCRIPT", "NPM", "DOCKER", "JAVASCRIPT", "PRISMA"],
    github: "https://github.com/PACY2/exli",
    state: "Soon",
  },
  {
    name: "Ticky",
    description:
      "Ticky is a web-based application that allows customers of Maroc Telecom to conveniently submit their complaints and place new orders online.",
    techs: [
      "EXPRESS",
      "JAVASCRIPT",
      "NPM",
      "REACT",
      "ZUSTAND",
      "TANSTACK QUERY",
    ],
    github: "https://github.com/PACY2/ticky",
    state: "Soon",
  },
  {
    name: "CodeBuddy",
    description:
      "CodeBuddy is a web-based platform designed for effortless sharing of code, files, images, links, and various other resources. It offers a unique feature where users can add metadata for each type of content, thereby enhancing the search and discovery process of valuable resources.",
    techs: ["PRISMA", "TYPESCRIPT", "REMIX"],
    github: "https://github.com/PACY2/codebuddy",
    state: "Soon",
  },
];
