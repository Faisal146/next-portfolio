import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import React from "react";

const BlogPagee = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const blogId = (await params).blogId;

  const projectRes = await fetch(
    `http://localhost:5000/api/v1/blogs/${blogId}`
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
