import { TProject } from "@/app/(dashboardLayout)/dashboard/projects/page";
import ProjectCard from "@/components/ui/ProjectCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects ",
  description: "explore all Projects",
};

const ProjectsPage = async () => {
  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`
  );

  const projects = await projectRes.json();
  const data = projects.data.result;
  // console.log(projectData);

  return (
    <div>
      <div className="text-center pt-28">
        <h1 className="text-4xl">All Projects</h1>
        <h1 className="text-xl my-2">My All successfull projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 py-12 max-w-6xl mx-auto">
        {data.map((project: TProject, index: string) => (
          <ProjectCard key={index} item={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
