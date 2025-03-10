import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import React from "react";

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);

//   const blogs = await res.json();

//   return blogs.slice(0, 3).map((item: TBlog) => ({
//     blogId: item._id,
//   }));
// };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blog}`
  );

  const blogDetails = await res.json();

  return {
    title: blogDetails.title,
    description: blogDetails.description,
  };
}

const BlogPagee = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const blogId = (await params).blogId;

  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${blogId}`
  );

  const project = await projectRes.json();
  const data = project.data;

  return (
    <div className="pt-12">
      <BlogDetailsCard blog={data}></BlogDetailsCard>
    </div>
  );
};

export default BlogPagee;
