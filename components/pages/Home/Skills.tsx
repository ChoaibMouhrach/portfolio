import { Skill } from "@/components/ui";
import { skillsConstant } from "@/constants";

export const Skills = () => {
  return (
    <section className="container mx-auto grid grid-cols-2 px-4 lg:px-0 lg:grid-cols-9 gap-2">
      {skillsConstant.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </section>
  );
};
