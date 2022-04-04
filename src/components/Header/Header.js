import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <div className="nav">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/review">Review</CustomLink>
      </div>
    </div>
  );
};

export default Header;
