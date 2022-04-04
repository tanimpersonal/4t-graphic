import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1 className="flex justify-center mt-5 text-4xl font-bold">
        Please don't kill me after watching! 404!!🤐
      </h1>
      <div className="flex justify-center h-screen mx-10 my-10">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/vGld5eyP7JY?start=5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h1 className="flex justify-center text-5xl font-extrabold">
        Get Back To
      </h1>
      <div className="button flex justify-center my-5">
        <Link
          className="px-2 py-2 bg-blue-500 mx-5 rounded-3xl duration-500 hover:bg-blue-700"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-2 py-2 bg-blue-500 mx-5 rounded-3xl duration-500 hover:bg-blue-700"
          to="/all-review"
        >
          All Review
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
