import React from "react";
import useData from "../../utility/useData";
import Card from "../Card/Card";

const AllReview = () => {
  const [reviews] = useData();
  console.log(reviews);
  return (
    <section className="my-5">
      <h1 className="text-5xl flex font-extrabold justify-center">
        Testimonials
      </h1>
      <div className="grid md:grid-cols-3 gap-5 my-5 mx-10">
        {reviews.map((review) => (
          <Card review={review} key={review.id}></Card>
        ))}
      </div>
    </section>
  );
};

export default AllReview;
