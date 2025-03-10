import { TBlog } from "@/app/(dashboardLayout)/dashboard/blogs/page";
import BlogCard from "@/components/ui/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "blogs ",
  description: "explore all blogs",
};

const BlogsPagee = async () => {
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
    cache: "no-store",
  });

  const blogs = await blogRes.json();
  const blogData = blogs.data.result;
  // console.log(blogData);

  return (
    <div>
      <div className="blogs py-16">
        <div className="text-center">
          <h1 className="text-4xl">Explore All Blogs</h1>
          <h1 className="text-xl my-2">Explore my Awesome tech blogs</h1>

          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
            {blogData.map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto py-10"></div>
      </div>
    </div>
  );
};

export default BlogsPagee;
