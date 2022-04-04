import React, { useState } from "react";
import Rating from "../Rating/Rating";

const Card = ({ review }) => {
  const { name, job_title, image, details, id } = review;
  const [rating, setRating] = useState([]);
  const newId = parseInt(id);
  //   for (let i = 0; i <= newId; i++) {
  //     ;
  //   }
  console.log(rating);
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="image overflow-hidden rounded">
        <img
          className="bg-slate-800 duration-500 hover:scale-110"
          src={image}
          alt=""
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl flex justify-center font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h6 className="mb-2 text-sm flex justify-center font-bold tracking-tight text-gray-900 dark:text-white">
          {job_title}
        </h6>
        <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
          "{details}"
        </p>
      </div>
    </div>
  );
};

export default Card;
