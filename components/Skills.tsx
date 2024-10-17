import {
  SiDocker,
  SiGrafana,
  SiKubernetes,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import SkillIcon from "./SkillIcon";
const Skills: React.FC = () => {
  return (
    <section className="mb-16 md:mb-32">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2 cursor-pointer">
        <SkillIcon Icon={SiTypescript} name="TypeScript" />
        <SkillIcon Icon={SiReact} name="React/Next.js" />
        <SkillIcon Icon={SiNodedotjs} name="Node.js/Express.js" />
        <SkillIcon Icon={SiPostgresql} name="SQL/NoSQL - Prisma" />
        <SkillIcon Icon={SiDocker} name="Docker" />
        <SkillIcon Icon={SiKubernetes} name="Kubernetes" />
        <SkillIcon Icon={SiGrafana} name="Prometheus/Grafana" />
      </div>
    </section>
  );
};

export default Skills;
