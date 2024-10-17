import { IconType } from "react-icons";

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

export default function SocialIcon({ Icon, href }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}
