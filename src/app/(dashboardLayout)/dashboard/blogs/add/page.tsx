"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";

// Define the type for the form data
interface FormData {
  title: string;
  description: string;
  author: string;
  img: string;
}

// Define the validation schema using Yup
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  author: yup.string().required("Link is required"),
  img: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

const CreateBlog = () => {
  // Fetch initial form data from the server or local state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // setFormData(data.data[0]);
        // reset(data.data[0]);
        if (data.success) {
          Swal.fire("success", "New Blog Added successfully", "success");
        } else {
          Swal.fire("error", data.message, "error");
        }
      })
      .catch((err) => console.log(err));

    // Handle form submission here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-5">Create new blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="fieldset">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            {...register("title")}
            className="input input-bordered"
          />
          {errors.title && <p className="text-error">{errors.title.message}</p>}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered"
          />
          {errors.description && (
            <p className="text-error">{errors.description.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <input
            type="text"
            {...register("author")}
            className="input input-bordered"
          />
          {errors.author && (
            <p className="text-error">{errors.author.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            {...register("img")}
            className="input input-bordered"
          />
          {errors.img && <p className="text-error">{errors.img.message}</p>}
        </div>

        <div className=" mt-6">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
