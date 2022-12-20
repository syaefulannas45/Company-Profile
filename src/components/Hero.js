import React from "react";
import HeroBackground from "../images/HeroBackground.jpg"
import Review from "../images/review.png"
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="flex-col lg:flex-row flex w-full justify-between items-center">
          <div className="lg:w-2/4 relative  w-full h-[500px] lg:h-full">
            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFD6E8" d="M41.1,25C28.8,45,-22.4,43.7,-35.8,23.2C-49.1,2.6,-24.5,-37.4,1.1,-36.8C26.7,-36.1,53.3,5,41.1,25Z" transform="translate(100 100)" />
            </svg>
            <div className="w-full absolute top-[5%] lg:top-[25%] lg:left-[10%] left-[5%]">
              <h1 className="text-blue-800 font-bold text-5xl">
                Create Your <br />
                <span className="mt-2">Succes</span> <br />
                <span className="text-orange-500 mt-2">Bussines</span>
              </h1>
              <p className="mt-5 w-[80%] text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est cum odit fugiat dolorum ut voluptatem quod, deleniti alias at blanditiis nobis distinctio veritatis consequatur veniam deserunt quidem ipsum magni.
              </p>
              <br />
              <button className="bg-orange-500 lg:p-2 lg:w-[15%] text-slate-100 rounded-full p-4 w-[40%]">Explore</button>
              <div className="flex mt-5">
                <div className="flex h-10 relative">
                  <img src={Review} alt="review" className="absolute left-4" />
                  <img src={Review} alt="review" className="absolute left-8" />
                  <img src={Review} alt="review" className="" />
                </div>
                <div className="ml-14">
                  <h1 className="font-bold text-slate-700">Customer Review</h1>
                  <i className="fa-solid fa-star text-yellow-400"></i> <span>4.8 <span className="text-sm text-slate-500">(5k Reviews)</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 mt-6">
            <img src={HeroBackground} alt="background" className="w-full lg:h-[500px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
