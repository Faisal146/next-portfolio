import Link from "next/link";
import Image from "next/image";
import ItemDeleteBtn from "@/components/ui/ItemDeleteBtn";

export type TBlog = {
  _id: string;
  title: string;
  description: string;
  author: string;
  img: string;
  isDeleted: boolean;
};

const BlogTable = async () => {
  const response = await fetch("http://localhost:5000/api/v1/blogs");
  const blogsData = await response.json();

  const blogs = blogsData.data.result;
  // console.log(blogs);

  //   const handleDelete = async (id: string) => {
  //     const result = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You will not be able to recover this blog!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Yes, delete it!",
  //       cancelButtonText: "No, keep it",
  //     });

  //     if (result.isConfirmed) {
  //       try {
  //         const response = await fetch(`/api/blogs?id=${id}`, {
  //           method: "DELETE",
  //         });

  //         if (response.ok) {
  //           Swal.fire("Deleted!", "Your blog has been deleted.", "success");
  //           // Remove the deleted blog from the state
  //           //   setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
  //         } else {
  //           Swal.fire("Error", "Failed to delete the blog.", "error");
  //         }
  //       } catch (error) {
  //         console.error("Error deleting blog:", error);
  //         Swal.fire(
  //           "Error",
  //           "An error occurred while deleting the blog.",
  //           "error"
  //         );
  //       }
  //     }
  //   };

  return (
    <div className="overflow-x-auto p-4">
      <div className="title flex items-center gap-6 mb-5">
        <h2 className="text-3xl font-semibold">Blogs List</h2>
        <Link href="/dashboard/blogs/add" passHref>
          <button className="btn btn-primary btn-sm">Create New Blog</button>
        </Link>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs &&
            blogs.map((blog: TBlog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.description.slice(0, 24)}</td>
                <td>{blog.author}</td>
                <td>
                  <div className="flex space-x-2">
                    <Image
                      src={blog.img}
                      alt={"blog-image"}
                      width={50}
                      height={50}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </div>
                </td>
                <td>
                  <ItemDeleteBtn model={"blogs"} id={blog._id}></ItemDeleteBtn>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
