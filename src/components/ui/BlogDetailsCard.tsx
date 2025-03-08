import { TBlog } from "@/app/(dashboardLayout)/dashboard/blogs/page";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-2/3  shadow-lg rounded-lg mx-auto p-6">
      <h2 className="text-center text-4xl font-semibold my-5">{blog.title}</h2>
      <div className="flex items-center justify-center  mb-5 py-2 rounded-lg gap-2">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={30}
          height={30}
          alt="author image"
        />

        <span className="text-lg font-medium">{blog.author}</span>
      </div>
      <figure className="mb-5">
        <Image
          src={blog.img}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-lg w-full object-cover"
        />
      </figure>
      <div className="text-gray-200 text-lg leading-relaxed">
        <p className="text-justify text-gray-300">{blog.description}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center text-xl text-gray-300">
          <AiFillLike className="text-teal-400 mr-2" />
          <span className="mr-1">100</span>
          Likes
        </div>
      </div>
      <div className="text-center">
        <Link
          href={"/blogs"}
          className="px-8 py-3 text-white bg-teal-500 rounded-lg hover:bg-teal-600"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
