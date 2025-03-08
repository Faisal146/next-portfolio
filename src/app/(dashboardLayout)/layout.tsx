import DashNav from "@/components/dashboard/DashNav";
import LogOutBtn from "@/components/ui/LogOutBtn";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}

          {/* Main content here */}

          <div className="navbar bg-base-300 shadow-sm">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-square btn-ghost drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">{session?.user?.name}</a>
            </div>
            <div className="flex-none flex items-center gap-6">
              <Image
                src={session?.user?.image as string}
                alt="user image"
                height={35}
                width={35}
                className="rounded"
              ></Image>

              <LogOutBtn></LogOutBtn>
            </div>
          </div>

          <div className="p-6">{children}</div>
        </div>
        <div className="drawer-side">
          <DashNav></DashNav>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
