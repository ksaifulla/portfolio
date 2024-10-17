import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}
export default function ProjectCard({
  title,
  description,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="p-3 rounded-md bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-[#141414] transition-colors cursor-pointer	">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-900 dark:text-gray-100">{title}</p>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="flex space-x-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Github size={20} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
