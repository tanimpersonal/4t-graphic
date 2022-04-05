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
  const [reviews] = useData();
  let navigate = useNavigate();
  const navigator = () => {
    navigate("/all-review");
  };
  return (
    <section>
      <div className="grid container grid-cols-1 md:gap-52 md:grid-cols-2 items-center md:mx-10 my-10 md:my-20 px-5 md:px-10">
        <div className="text md:mb-0 mb-10">
          <h1
            data-aos="fade-up-right"
            className=" text-7xl md:text-8xl mb-5 font-extrabold text-[#766DF4]"
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
      <h1 className="md:text-5xl text-4xl flex font-extrabold justify-center">
        Our Customer Says!
      </h1>
      {/* Carousel start */}
      <div className="mx-5">
        <Carousel
          className="carousel-root"
          infiniteLoop={true}
          showThumbs={false}
          showArrows={true}
          autoFocus={true}
          emulateTouch={true}
          interval={2000}
          swipeable={true}
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
