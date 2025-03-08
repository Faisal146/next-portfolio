"use client";

import React from "react";
import Swal from "sweetalert2";

const ItemDeleteBtn = ({ model, id }: { model: string; id: string }) => {
  // console.log(`Deleting ${model} with id: ${id}`);
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/api/v1/${model}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (data.success) {
            Swal.fire(
              "Deleted!",
              "Your item has been deleted. Please Reload to see effect",
              "success"
            );
          }
        });
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error!",
        "Something went wrong while deleting the item.",
        "error"
      );
    }
  };
  return (
    <div>
      <button
        className="btn btn-error btn-sm font-medium"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
};

export default ItemDeleteBtn;
