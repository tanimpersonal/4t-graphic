import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import icon from "../../Images/my icon.png";
import useData from "../../utility/useData";
import Review from "../Review/Review";
import "./Homepage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
AOS.init();
const Homepage = () => {
  const [reviews, setReviews] = useData();
  let navigate = useNavigate();
  const navigator = () => {
    navigate("/all-review");
  };
  return (
    <section>
      <div className="flex items-center mx-10 justify-between my-20">
        <div className="text w-2/3 px-20">
          <h1
            data-aos="fade-up-right"
            className="text-8xl mb-5 font-extrabold text-[#766DF4]"
          >
            4TGraphic
          </h1>
          <h1 className="text-4xl font-bold mb-5">We Believe in Work</h1>
          <p>
            We’re 4TGraphic. Bangladesh is where we are now based. Our
            e-commerce website experience stretches back ten years. Our product
            is solid, has a good reputation, and is trusted by people of all
            sorts of startup ventures.
          </p>
        </div>
        <div className="image" data-aos="zoom-in-up">
          <img src={icon} alt="" />
        </div>
      </div>
      <h1 className="text-5xl flex font-extrabold justify-center">
        Our Customer Says!
      </h1>
      {/* Carousel start */}
      <div className="mx-10">
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
