"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";

// Define the type for the form data
interface FormData {
  title: string;
  description: string;
  link: string;
  github: string;
  technologies: string | string[];
  img: string[];
  isDeleted: boolean;
}

// Define the validation schema using Yup
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  link: yup.string().required("Link is required"),
  github: yup
    .string()
    .url("Must be a valid URL")
    .required("Github URL is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  technology: yup.string().required("technology is required"),
  img: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

const UpdateForm = () => {
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

    const technologies = data.technologies
      .split(",")
      .map((tech: string) => tech.trim());
    // console.log(technologies);

    data.img = data.img.split(",").map((img: string) => img.trim());

    data.technologies = technologies;

    fetch("http://localhost:5000/api/v1/projects", {
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
          Swal.fire("success", "New Project Added successfully", "success");
        } else {
          Swal.fire("error", data.message, "error");
        }
      })
      .catch((err) => // console.log(err));

    // Handle form submission here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-5">Create new project</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="fieldset">
          <label className="label">
            <span className="label-text">Name</span>
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
            <span className="label-text">Link</span>
          </label>
          <input
            type="text"
            {...register("link")}
            className="input input-bordered"
          />
          {errors.link && <p className="text-error">{errors.link.message}</p>}
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

        <div className="fieldset">
          <label className="label">
            <span className="label-text">GitHub Link</span>
          </label>
          <input
            type="text"
            {...register("github")}
            className="input input-bordered"
          />
          {errors.github && (
            <p className="text-error">{errors.github.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Technologies </span>
          </label>
          <input
            type="text"
            {...register("technologies")}
            className="input input-bordered"
          />
          {errors.technologies && (
            <p className="text-error">{errors.technologies.message}</p>
          )}
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

export default UpdateForm;
