import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const projectId = (await params).projectId;

  const projectRes = await fetch(
    `http://localhost:5000/api/v1/projects/${projectId}`
  );

  const project = await projectRes.json();
  const data = project.data;
  // console.log(projectData);

  // console.log(projectId);

  return (
    <div className="max-w-6xl mx-auto mb-10">
      <div className="text-center pt-28 mb-10">
        <h1 className="text-4xl">Highlight Projects</h1>
        <h1 className="text-xl my-2">My recent successfull projects</h1>
      </div>

      <div className="image grid grid-cols-2 gap-2">
        <Image
          src={data.img[0]}
          height={500}
          width={500}
          className="rounded-3xl  object-cover"
          alt="project-image"
        ></Image>
        <Image
          src={data.img[1] ? data.img[1] : data.img[0]}
          alt="img"
          height={500}
          width={500}
        ></Image>
      </div>

      <div>
        <h1 className="mt-6 mb-4 text-2xl">Project: {data.title} </h1>
        <p>{data.description}</p>

        <h1 className="text-2xl my-4">Used Technologies</h1>
        <div className="mb-7">
          {data.technologies.map((tech: string, index: string) => (
            <button
              key={index}
              className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1"
            >
              {tech}
            </button>
          ))}
        </div>

        <Link href={data.link} className="btn btn-info font-medium">
          View Project
        </Link>
        <Link href={data.github} className="btn btn-info font-medium ml-3">
          Soruce Code (Github)
        </Link>

        <Link
          href="/projects"
          className="btn btn-info ml-3 font-medium text-sm hover:text-base-300 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
