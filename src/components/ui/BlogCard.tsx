import { TBlog } from "@/app/(dashboardLayout)/dashboard/blogs/page";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden">
      <figure>
        <Image
          src={blog.img}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        <h2 className="text-xl font-bold mt-4">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>
        <p className="text-gray-200 mt-2">
          {blog.description.length > 100
            ? blog.description.slice(0, 60) + "..."
            : blog.description}
          <Link href={`/blogs/${blog._id}`} className="text-teal-100 ml-1">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                width={100}
                height={100}
                alt="author image"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-300">
              {blog.author}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <AiFillLike className="text-gray-200 text-xl mr-1" />
            100 Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
