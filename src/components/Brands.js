import React from "react";
import Background from "../images/goggle.png";
import Background1 from "../images/netflix.png";
import Background2 from "../images/airbnb.png";
import Background3 from "../images/amazon.png";
import Background4 from "../images/fb.png";
import Background5 from "../images/grab.png";
const Brands = () => {
  return (
    <>
      <section id="brands" className="mb-20">
        <div className="w-full">
          <div className="mx-auto lg:w-[50%]">
            <h1 className="text-center text-blue-800 font-semibold">
              <i className="fa-solid fa-arrow-left lg:mr-5"></i> Trusted by <span className="text-orange-500">100+ companies</span> World Wide <i class="fa-solid fa-arrow-right lg:ml-5"></i>
            </h1>
          </div>
          <div className="mt-10 lg:w-full flex flex-wrap  mx-auto justify-around p-2 lg:items-center">
            <img src={Background} alt="brands" className="w-[30%] lg:w-[8%] h-10 grayscale hover:grayscale-0 cursor-pointer mb-5 lg:mb-0" />
            <img src={Background1} alt="brands" className="w-[30%] lg:w-[8%] h-10 grayscale hover:grayscale-0 cursor-pointer mb-5 lg:mb-0 md:h-20 lg:h-10" />
            <img src={Background2} alt="brands" className="w-[30%] lg:w-[8%] h-10 grayscale hover:grayscale-0 cursor-pointer mb-5 lg:mb-0 md:h-20 lg:h-10" />
            <img src={Background3} alt="brands" className="w-[30%] lg:w-[8%] h-10 grayscale hover:grayscale-0 cursor-pointer mb-5 lg:mb-0 md:h-20 lg:h-10" />
            <img src={Background4} alt="brands" className="w-[30%] lg:w-[8%] h-10 grayscale hover:grayscale-0 cursor-pointer mb-5 lg:mb-0 md:h-20 lg:h-10" />
            <img src={Background5} alt="brands" className="w-[30%] lg:w-[8%] h-10 grayscale hover:grayscale-0 cursor-pointer mb-5 lg:mb-0 md:h-20 lg:h-10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
