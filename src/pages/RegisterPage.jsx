import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerWithEmailPassword, setUser, handleGoogleSignin } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (pass.length < 6) {
      return toast("Less Than 6 Characters");
    }
    if (!uppercase.test(pass)) {
      return toast("Need an Uppercase");
    }
    if (!lowercase.test(pass)) {
      return toast("Need a Lowercase");
    }

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(userCredential.user);
            return toast("Sign Up Successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleSignup = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        return toast("Sign Up with Google successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-10 bg-blue-500">
      <div className="md:w-4/12 w-8/12 border-2 mx-auto px-7 py-8 rounded-lg bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-7">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            name="photoUrl"
            placeholder="Photo URL"
          />

          <label className="text-xl font-semibold">Password</label>
          <div className="relative flex">
            <input
              className="border border-gray-400 w-full py-3 mb-4 px-3 rounded-sm"
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Type Password"
            />

            <button
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <IoMdEye size={26} className="absolute top-3 left-100" />
              ) : (
                <IoMdEyeOff size={26} className="absolute top-3 left-100" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-center text-white text-xl font-semibold py-3 rounded-sm cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-[18px] font-semibold text-center">
            Already Have an Account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline text-[20px]"
            >
              Login
            </Link>
          </p>
          <button
            onClick={googleSignup}
            className="text-center text-lg font-semibold border border-gray-400 py-2.5 px-3 mt-3 rounded-sm flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white hover:font-normal cursor-pointer"
          >
            <FcGoogle size={24} />
            Login With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
