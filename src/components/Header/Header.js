import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
  const [icon, setIcon] = useState(true);
  return (
    <div className="bg-[#766DF4] py-5">
      <div
        onClick={() => setIcon(!icon)}
        className="icon w-10 flex ml-5 md:hidden"
      >
        {icon ? (
          <MenuIcon className="w-10"></MenuIcon>
        ) : (
          <XIcon className="w-10"></XIcon>
        )}
      </div>
      <div
        className={`nav absolute md:static md:flex md:flex-row md:mt-0 md:bg-transparent/0 gap-5 md:z-0 md:shadow-none justify-center duration-500 ease-linear ${
          icon
            ? "top-[-400px] bg-blue-700 z-10 w-screen justify-center flex flex-col items-center shadow-2xl mt-10 rounded"
            : "top-14 bg-blue-700 z-10 w-screen justify-center flex flex-col items-center shadow-2xl mt-10 rounded"
        }`}
      >
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
