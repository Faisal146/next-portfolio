"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";

// Define the type for the form data
interface FormData {
  name: string;
  description: string;
  about: string;
  img: string;
  email: string;
  phone: string;
  address: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

// Define the validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  about: yup.string().required("About is required"),
  img: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  facebook: yup.string().url("Must be a valid URL"),
  instagram: yup.string().url("Must be a valid URL"),
  linkedin: yup.string().url("Must be a valid URL"),
});

const UpdateForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  // Fetch initial form data from the server or local state

  // console.log(formData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: formData,
  });

  useEffect(() => {
    fetch(`https://next-portfolio-server-mu.vercel.app/api/v1/about`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data is ", data);
        setFormData(data.data[0]);
        reset(data.data[0]);
      });
    // Replace with your API endpoint
  }, [reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/about`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData(data.data[0]);
        reset(data.data[0]);
        Swal.fire(
          "success",
          "About information updated successfully",
          "success"
        );
      });

    // Handle form submission here
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="fieldset">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className="input input-bordered"
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description")}
            className="input input-bordered"
          />
          {errors.description && (
            <p className="text-error">{errors.description.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">About</span>
          </label>
          <textarea
            {...register("about")}
            className="textarea textarea-bordered"
          />
          {errors.about && <p className="text-error">{errors.about.message}</p>}
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
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="input input-bordered"
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            {...register("phone")}
            className="input input-bordered"
          />
          {errors.phone && <p className="text-error">{errors.phone.message}</p>}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            {...register("address")}
            className="input input-bordered"
          />
          {errors.address && (
            <p className="text-error">{errors.address.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Facebook</span>
          </label>
          <input
            type="text"
            {...register("facebook")}
            className="input input-bordered"
          />
          {errors.facebook && (
            <p className="text-error">{errors.facebook.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">Instagram</span>
          </label>
          <input
            type="text"
            {...register("instagram")}
            className="input input-bordered"
          />
          {errors.instagram && (
            <p className="text-error">{errors.instagram.message}</p>
          )}
        </div>

        <div className="fieldset">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="text"
            {...register("linkedin")}
            className="input input-bordered"
          />
          {errors.linkedin && (
            <p className="text-error">{errors.linkedin.message}</p>
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
