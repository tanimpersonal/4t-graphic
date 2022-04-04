import React from "react";
import icon from "../../Images/my icon.png";
const Homepage = () => {
  return (
    <div className="flex items-center mx-10 justify-between">
      <div className="text">
        <h1 className="text-4xl mb-5 font-bold">4TGraphic</h1>
        <h1 className="text-4xl font-bold">We Believe in Work</h1>
      </div>
      <div className="image">
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
