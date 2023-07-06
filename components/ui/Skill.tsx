import { Skill as ISkill } from "@/interfaces/skills";

interface Props {
  skill: ISkill;
}

export const Skill = ({ skill }: Props) => {
  return (
    <div className="rounded-md font-semibold tracking-wide p-4 bg-gray-700 flex flex-col gap-4 items-center justify-between">
      <skill.icon className="text-xl" />
      {skill.name}
    </div>
  );
};
