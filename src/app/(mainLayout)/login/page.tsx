"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import loginImage from "@/assets/login-image.png";

const LoginPage = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      <h1 className="text-center text-4xl mb-5 pt-28 font-bold">
        Login <span className="text-teal-500">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center h-96">
        <div className="mx-auto">
          <Image
            src={loginImage}
            width={300}
            height={100}
            alt="login page"
            className=""
          />
        </div>

        <div className="w-[80%] mx-auto  p-6 shadow-lg rounded-lg">
          <p className="text-center mt-6 text-2xl text-gray-500">
            Sign Up Using
          </p>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4  ">
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow hover:bg-gray-200"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
