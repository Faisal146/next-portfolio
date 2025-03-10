import Link from "next/link";
import Image from "next/image";
import ItemDeleteBtn from "@/components/ui/ItemDeleteBtn";

export type TProject = {
  _id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: string[];
  img: string[];
  isDeleted: boolean;
};

const ProjectPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`
  );
  const projectsData = await response.json();

  const projects = projectsData?.data.result;

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
        <h2 className="text-3xl font-semibold">Projects List</h2>
        <Link href="/dashboard/projects/add">
          <button className="btn btn-primary btn-sm">Create New Project</button>
        </Link>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Technologies</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((item: TProject) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description.slice(0, 24)}</td>
                <td>{item.technologies.toString()}</td>
                <td>
                  <div className="flex space-x-2">
                    <Image
                      src={item.img[0]}
                      alt={"project-image"}
                      width={50}
                      height={50}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </div>
                </td>
                <td>
                  <ItemDeleteBtn
                    model={"projects"}
                    id={item._id}
                  ></ItemDeleteBtn>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectPage;
