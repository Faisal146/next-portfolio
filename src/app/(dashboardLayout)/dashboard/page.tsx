import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
    </div>
  );
};

export default DashboardPage;
