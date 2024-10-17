import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="mb-16 md:mb-32">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div className="space-y-4">
        <ProjectCard
          title="WalletWave"
          description="A web app for digital wallet management, featuring bank transfers, P2P payments, and
          transaction tracking, built with Next.js, Tailwind CSS, Recoil, Express, PostgreSQL (Prisma ORM), and managed
          as a monorepo with TurboRepo."
          githubLink="https://github.com/KhalidSaifulla0/WalletWave"
          liveLink="https://project-one.com"
        />
        <ProjectCard
          title="ShortSportz"
          description="A blogging platform built with React.js, Cloudare Workers (Hono.js), PostgreSQL (Prisma ORM),
          TypeScript, and managed as a monorepo with TurboRepo."
          githubLink="https://github.com/KhalidSaifulla0/ShortSportz"
          liveLink="https://project-two.com"
        />
        <ProjectCard
          title="StudyCircle"
          description="A collaborative study platform built with React and Tailwind CSS on the frontend, and Express
          with MongoDB on the backend."
          githubLink="https://github.com/KhalidSaifulla0/StudyCircle"
          liveLink="https://project-three.com"
        />
      </div>
    </section>
  );
};

export default Projects;
