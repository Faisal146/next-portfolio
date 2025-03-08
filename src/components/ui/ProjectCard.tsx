import { TProject } from "@/app/(dashboardLayout)/dashboard/projects/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ item }: { item: TProject }) => {
  return (
    <div>
      <div className="mx-auto p-5 flex gap-6 bg-base-200 rounded-3xl">
        <div className=" flex w-1/3 justify-center">
          <Image
            src={
              item.img[0] ||
              "https://media.istockphoto.com/id/1434474179/video/data-dark-background-loopable.jpg?s=640x640&k=20&c=Gl_QWAtkXmifuJK7nDo_dF8mIRPLUqIlXDLtgVlD1XA="
            }
            width={350}
            height={400}
            alt="my_photo"
            className="rounded-2xl border-2 border-gray-500 object-cover"
          ></Image>
        </div>

        <div className="w-2/3">
          <h2 className="text-2xl mb-4 font-bold">{item.title}</h2>
          <p className="">{item.description.slice(0, 100) + "..."}</p>

          <div className="mt-4">
            <Link
              href={`/projects/${item._id}`}
              className="btn font-medium btn-primary btn-sm"
            >
              Details
            </Link>
            <Link
              href={item.github}
              className="btn font-medium ml-3 btn-info btn-sm"
            >
              Source Code
            </Link>
            <Link
              href={item.link}
              className="btn font-medium ml-3 btn-info btn-sm"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
