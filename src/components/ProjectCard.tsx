import Image from "next/image";
import Link from "next/link";
import project from "../../public/poject.png";

const ProjectCard = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-4 lg:h-80">
      <div className="h-80 w-full">
        <Image src={project} className="h-full object-cover rounded-md object-left w-full" alt={"This is an image of a project i created"} />
      </div>
      <div className="bg-white dark:bg-dark-blue duration-300 p-4 rounded-md flex flex-col gap-4">
        <h3>Project</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem quo mollitia doloremque et possimus vitae, aliquid vel accusamus quisquam
          molestiae? Itaque ducimus ipsam iste qui hic. Rem, optio praesentium?
        </p>
        <div className="flex flex-wrap gap-2">
          <div className="bg-light-gray dark:bg-darker-blue  py-2 px-4 rounded">react.js</div>
          <div className="bg-light-gray dark:bg-darker-blue  py-2 px-4 rounded">rust</div>
          <div className="bg-light-gray dark:bg-darker-blue  py-2 px-4 rounded">typescript</div>
          <div className="bg-light-gray dark:bg-darker-blue  py-2 px-4 rounded">laravel</div>
        </div>
        <div className="flex gap-4">
          <Link className="bg-primary text-white rounded-md py-2 px-4" href="">
            CODE
          </Link>
          <Link className="bg-primary text-white rounded-md py-2 px-4" href="">
            PREVIEW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
