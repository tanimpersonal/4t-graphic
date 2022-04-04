import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="nav flex text-2xl">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/review">Review</CustomLink>
      </div>
    </div>
  );
};

export default Header;
