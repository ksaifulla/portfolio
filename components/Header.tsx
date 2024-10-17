import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { IconType } from "react-icons";
import SocialIcon from "./SocialIcon";

const Header: React.FC = () => {
  return (
    <header className="mb-14 sm:mb-32">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-medium font-medium  flex items-center gap-4 text-gray-900 dark:text-gray-100">
            Khalid Saifulla
          </h1>
          <p className="text-gray-700 text-medium font-medium dark:text-gray-300 mb-2">
            Full Stack Developer
          </p>
          <div className="flex space-x-4">
            <SocialIcon
              Icon={Mail as IconType}
              href="mailto:ksaifulla90@gmail.com"
            />
            <SocialIcon
              Icon={Github as IconType}
              href="https://github.com/ksaifulla"
            />
            <SocialIcon
              Icon={Linkedin as IconType}
              href="https://linkedin.com/in/khalid"
            />
            <SocialIcon
              Icon={Twitter as IconType}
              href="https://twitter.com/asiancaves"
            />
            <SocialIcon Icon={FileText as IconType} href="/resume.pdf" />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/yatoPfp.jpg"
            alt="Khalid Saifulla"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
