"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/#contact", label: "Contact" },
  ];
  return (
    <div>
      <div className="bg-base-100 shadow fixed w-full">
        <div className="navbar  max-w-6xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
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
            <a className="btn btn-ghost text-xl">Portfolio</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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
          <div className="navbar-end">
            <Link href="/login" className="btn btn-soft">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
