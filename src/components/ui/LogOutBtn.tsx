"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogOutBtn = () => {
  return (
    <div>
      <button
        className="btn btn-soft font-medium mr-4 btn-error"
        onClick={() => signOut()}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOutBtn;
