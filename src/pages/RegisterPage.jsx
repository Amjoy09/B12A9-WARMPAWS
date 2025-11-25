import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="py-10 bg-blue-500">
      <div className="md:w-4/12 w-8/12 border-2 mx-auto px-7 py-8 rounded-lg bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-7">Sign Up</h1>

        <form className="flex flex-col gap-3">
          <label className="text-xl font-semibold">Name</label>
          <input
            className="border border-gray-400 py-3 px-3 mb-4 rounded-sm"
            name="name"
            placeholder="Your Name"
            type="text"
          />
          <label className="text-xl font-semibold">Email</label>
          <input
            className="border border-gray-400 py-3 px-3 mb-4 rounded-sm"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <label className="text-xl font-semibold">Photo URL</label>
          <input
            className="border border-gray-400 py-3 px-3 mb-4 rounded-sm"
            type="url"
            name="url"
            placeholder="Photo URL"
          />
          <label className="text-xl font-semibold">Password</label>
          <input
            className="border border-gray-400 py-3 mb-4 px-3 rounded-sm"
            type="password"
            name="password"
            placeholder="Type Password"
          />
          <Link className="bg-blue-500 text-center text-white text-xl font-semibold py-3 rounded-sm">
            Sign Up
          </Link>
          <p className="text-[18px] font-semibold text-center">
            Already Have an Account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline text-[20px]"
            >
              Login
            </Link>
          </p>
          <Link className="text-center text-lg font-semibold border border-gray-400 py-2.5 px-3 mt-3 rounded-sm flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white hover:font-normal">
            <FcGoogle size={24} />
            Login With Google
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
