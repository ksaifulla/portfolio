import { IconType } from "react-icons";

export interface SocialIconProps {
  Icon: IconType;
  href: string;
}

export interface SkillIconProps {
  Icon: IconType;
  name: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

export interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
}
