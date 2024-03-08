import React from "react";
import "./Homepage.css";
import MultipleItemCarousal from "./MultipleItemCarousal";
import { restraunts } from "../../../Data/restraunt";
import RestrauntCard from "./RestrauntCard";

const Homepage = () => {
  return (
    <div>
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">Bite Blitz</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Fresh Flavors, Fast Delivery, Happy Eating!
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meals
          </p>
        </div>
        <MultipleItemCarousal />
      </section>
      <section className="px-5 lg:px-20 ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Order From Our Handpicked Favourites
          </h1>
          <div className="flex flex-wrap items-center justify-around">
            {restraunts.map((item, index) => (
              <RestrauntCard item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
