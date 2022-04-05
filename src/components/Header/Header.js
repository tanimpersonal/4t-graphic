import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-[#766DF4] py-5">
      <div className="nav flex gap-5 justify-center">
        <CustomLink
          className="border-b-4 inline-block pb-3 duration-100 rounded hover:border-blue-700"
          to="/"
        >
          Homepage
        </CustomLink>
        <CustomLink
          className="border-b-4 inline-block pb-3 rounded hover:border-blue-700"
          to="/dashboard"
        >
          Dashboard
        </CustomLink>
        <CustomLink
          className="border-b-4 inline-block pb-3 rounded hover:border-blue-700"
          to="/all-review"
        >
          Review
        </CustomLink>
        <CustomLink
          className="border-b-4 inline-block pb-3 rounded hover:border-blue-700 text-blue-700"
          to="/blogs"
        >
          Blogs
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
