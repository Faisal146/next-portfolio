import Image from "next/image";

import myPhoto from "@/assets/my_photo.jpg";
import {
  FaCss3,
  FaEnvelope,
  FaFacebook,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaNeos,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { TProject } from "../(dashboardLayout)/dashboard/projects/page";
import { TBlog } from "../(dashboardLayout)/dashboard/blogs/page";
import BlogCard from "@/components/ui/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio Website",
};

const HomePage = async () => {
  const aboutRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/about`);
  const about = await aboutRes.json();
  const aboutData = about.data[0];
  // console.log(aboutData);

  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    next: {
      revalidate: 30,
    },
  });

  const blogs = await blogRes.json();
  const blogData = blogs.data.result;
  // console.log(blogData);

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const projects = await projectRes.json();
  const projectData = projects.data.result;
  // console.log(projectData);

  return (
    <div>
      <div className="text-center min-h-screen flex justify-center flex-col">
        <h1 className="text-2xl">Hello, I am,</h1>
        <h1 className="text-9xl my-5">{aboutData.name}</h1>
        <p className="text-2xl">{aboutData.description}.</p>
        <div className="social flex justify-center gap-5 py-5 text-2xl">
          <Link href={aboutData.linkedin}>
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link href={aboutData.facebook}>
            {" "}
            <FaFacebook></FaFacebook>
          </Link>
          <Link href={aboutData.instagram}>
            {" "}
            <FaInstagram></FaInstagram>
          </Link>
        </div>
        <Link
          href={
            "https://drive.google.com/file/d/1vUTaqHD-4p92AjNnG1uHiUotY4WvY-fR/view?usp=sharing"
          }
          className="btn btn-primary w-40 mx-auto font-medium mt-4"
        >
          My Resume
        </Link>
      </div>

      <div className=" bg-base-200" id="about">
        <div className="about flex max-w-6xl mx-auto py-28">
          <div className="w-1/2 flex justify-center">
            <Image
              src={myPhoto}
              width={350}
              height={400}
              alt="my_photo"
              className="rounded-2xl border-2 border-gray-500"
            ></Image>
          </div>

          <div className="w-1/2">
            <h2 className="text-4xl mb-4 font-bold">About Me</h2>
            {aboutData.about}
          </div>
        </div>
      </div>

      <div className="services my-20">
        <div className="text-center">
          <h1 className="text-4xl">My Services</h1>
          <h1 className="text-xl my-2">What I can do for my clients</h1>
        </div>

        <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto py-10">
          <div className="card bg-base-300 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/7991/7991055.png"
                alt="ser"
                height={100}
                width={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web Development</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card bg-base-300 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/7991/7991055.png"
                alt="ser"
                height={100}
                width={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Web Design(UI/UX)</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card bg-base-300 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/7991/7991055.png"
                alt="ser"
                height={100}
                width={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">SEO</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="tech bg-base-200 py-16">
        <div className="text-center">
          <h1 className="text-4xl">Tech Stack</h1>
          <h1 className="text-xl my-2">What Technologies I Know</h1>
        </div>
        <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto py-10">
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Front-End</h2>
              <div>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaHtml5></FaHtml5> HTML
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaCss3></FaCss3> CSS
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaCss3></FaCss3> Tailwind
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaReact></FaReact> React
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaReact></FaReact> Redux
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaNeos></FaNeos> Next
                </button>
              </div>

              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Back-end</h2>
              <div>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaHtml5></FaHtml5> HTML
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaCss3></FaCss3> CSS
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaCss3></FaCss3> Tailwind
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaReact></FaReact> React
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaReact></FaReact> Redux
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaNeos></FaNeos> Next
                </button>
              </div>

              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title">UI/UX Design</h2>
              <div>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaHtml5></FaHtml5> HTML
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaCss3></FaCss3> CSS
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaCss3></FaCss3> Tailwind
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaReact></FaReact> React
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaReact></FaReact> Redux
                </button>
                <button className="bg-base-300 btn rounded-full border-2 font-medium btn-soft text-md px-5 m-1">
                  <FaNeos></FaNeos> Next
                </button>
              </div>

              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="text-center">
          <h1 className="text-4xl">Highlight Projects</h1>
          <h1 className="text-xl my-2">My recent successfull projects</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 py-12 max-w-6xl mx-auto">
          {projectData.slice(0, 2).map((item: TProject) => (
            <ProjectCard key={item._id} item={item}></ProjectCard>
          ))}
        </div>
        <div className="text-center ">
          <Link href={"/projects"} className="btn font-medium btn-primary">
            View More Projects
          </Link>
        </div>
      </div>

      <div className="blogs py-12">
        <div className="text-center">
          <h1 className="text-4xl">Latest Blogs</h1>
          <h1 className="text-xl my-2">Explore my latest tech blogs</h1>

          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
            {blogData.slice(0, 3).map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href={"/blogs"} className="btn font-medium btn-primary">
              View More Blogs
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto py-10"></div>
      </div>

      <section id="contact" className="p-10 bg-base-200 ">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        <div className="max-w-6xl mx-auto flex gap-6">
          <div className="w-1/4">
            <div className="flex items-center flex-col py-5 border-2 rounded-xl gap-4 border-gray-500">
              <FaPhone className="text-4xl"></FaPhone>
              <Link href={"tel:01538391381"}>{aboutData.phone}</Link>
            </div>
            <div className="flex items-center flex-col py-5 border-2 rounded-xl gap-4 border-gray-500 mt-3">
              <FaEnvelope className="text-4xl"></FaEnvelope>
              <Link href={`mailto:${aboutData.email}`}>{aboutData.email}</Link>
            </div>
            <div className="flex items-center flex-col py-5 border-2 rounded-xl gap-4 border-gray-500 mt-3">
              <FaMap className="text-4xl"></FaMap>
              <p>{aboutData.address}</p>
            </div>
          </div>
          <form className="space-y-6 w-3/4">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered h-32 w-full"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
