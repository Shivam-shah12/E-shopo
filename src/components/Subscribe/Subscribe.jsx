import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
      id="contact"
    >
      <div className="container backdrop-blur-sm py-10 flex flex-col">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          </div>
          
          <div className="w-full flex space-x-2 justify-center my-2">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-[40%] text-2xl p-3 text-black rounded-md"
          />
          <button  className="bg-blue-500 px-8 py-4 rounded-md text-white font-mono">
             Subscribe
          </button>
          </div>
      </div>
    </div>
  );
};

export default Subscribe;
