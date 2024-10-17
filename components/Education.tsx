import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <section className="mb-16 md:mb-32 cursor-pointer">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Education
      </h2>
      <div className="space-y-4">
        <EducationCard
          institution="The Heritage Academy"
          degree="Bachelor of Computer Applications"
          period="2022 - 2025"
        />
      </div>
    </section>
  );
}
