import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="nav flex gap-5 justify-center">
        <CustomLink
          className="border-b-4 inline-block pb-3 duration-100 hover:border-red-500"
          to="/"
        >
          Home
        </CustomLink>
        <CustomLink
          className="border-b-4 inline-block pb-3 hover:border-red-500"
          to="/dashboard"
        >
          Dashboard
        </CustomLink>
        <CustomLink
          className="border-b-4 inline-block pb-3 hover:border-red-500"
          to="/review"
        >
          Review
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
