import React from "react";
import { Carousel } from "react-responsive-carousel";
import icon from "../../Images/my icon.png";
import useData from "../../utility/useData";
import Review from "../Review/Review";
import "./Homepage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const [reviews, setReviews] = useData();
  let navigate = useNavigate();
  const navigator = () => {
    navigate("/all-review");
  };
  return (
    <section>
      <div className="flex items-center mx-10 justify-between">
        <div className="text">
          <h1 className="text-4xl mb-5 font-bold">4TGraphic</h1>
          <h1 className="text-4xl font-bold">We Believe in Work</h1>
        </div>
        <div className="image">
          <img src={icon} alt="" />
        </div>
      </div>
      <h1 className="text-5xl flex font-extrabold justify-center">
        Our Customer Says!
      </h1>
      {/* Carousel start */}
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          className="carousel-root"
          showThumbs={false}
          showArrows={true}
        >
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Carousel>
        <div className="show-all flex justify-center mt-5 ">
          <button
            onClick={navigator}
            className="bg-[#766DF4] px-2 py-2 rounded-2xl"
          >
            Show All Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
