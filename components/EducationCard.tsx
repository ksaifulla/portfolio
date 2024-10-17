interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
}

export default function EducationCard({
  institution,
  degree,
  period,
}: EducationCardProps) {
  return (
    <div className="p-3 rounded-md bg-gray-100 dark:bg-black dark:hover:bg-[#141414] cursor-pointer	">
      <p className="text-gray-900 dark:text-gray-100">{institution}</p>
      <p className="text-gray-700 dark:text-gray-300">{degree}</p>
      <p className="text-gray-600 dark:text-gray-400 ">{period}</p>
    </div>
  );
}
