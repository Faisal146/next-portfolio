"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashNav = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/info", label: "Information" },
    { href: "/dashboard/blogs", label: "Blogs" },
    { href: "/dashboard/projects", label: "Projects" },
  ];

  return (
    <div>
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-screen w-80 p-6 pt-6 ">
        {/* Sidebar content here */}
        <h1 className="text-2xl py-4">Portfolio</h1>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${
                pathname === href
                  ? "bg-gray-500 font-bold"
                  : " text-gray-300 hover:text-teal-300"
              }`}
            >
              {label}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashNav;
