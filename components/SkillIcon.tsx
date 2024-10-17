import { IconType } from "react-icons";

interface SkillIconProps {
  Icon: IconType;
  name: string;
}

export default function SkillIcon({ Icon, name }: SkillIconProps) {
  return (
    <div className="bg-gray-200 dark:bg-[#141414] text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full flex items-center space-x-2">
      <Icon />
      <span className="text-sm">{name}</span>
    </div>
  );
}
