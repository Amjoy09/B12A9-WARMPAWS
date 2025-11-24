import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl border-rose-300 bg-cyan-900 text-rose-300 h-[60px]"
        >
          🐹 WarmPaws🐶
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="font-medium text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="font-medium text-lg">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="font-medium text-lg">My Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn text-white text-xl bg-orange-700">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
