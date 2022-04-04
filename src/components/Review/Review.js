import React from "react";
import "./Review.css";
const Review = ({ review }) => {
  const { name, job_title, image, id } = review;
  return (
    <div className="carousel-item">
      <img src={image} alt="" />
      <div className="myCarousel">
        <div className="slider-img">
          <p className="font-bold">{name}</p>
          <p className="font-semibold">{job_title}</p>
          <p>{`"${review.details}"`}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
