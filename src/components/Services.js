import React from "react";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="w-full">
          <div className="w-full">
            <h1 className="text-center  text-blue-800 text-4xl font-semibold">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-center w-full lg:w-[70%] mx-auto mt-3 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus sapiente. Consequatur obcaecati sint enim, pariatur adipisci vel dolorem illum?
            </p>
          </div>
          <div className="w-full flex items-center mt-20 mb-20 lg:flex-row flex-col">
            <div className="w-[80%] lg:w-2/4">
              <div className="w-full lg:w-[60%] mx-auto shadow-lg p-5 rounded-xl lg:h-[330px] relative">
                <h1 className="text-center lg:w-[60%] mx-auto text-slate-800 font-semibold text-xl pt-16">Shopify Development</h1>
                <p className="text-slate-600 mt-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste. Delectus obcaecati aliquam quia ex cumque commodi perspiciatis, nostrum soluta!</p>
                <div className="w-full lg:w-[80%] mx-auto mt-10">
                  <button className=" mx-auto border p-3 text-center rounded-full w-[60%] block lg:w-[40%]">Read More</button>
                </div>
                <div className="absolute top-[-45px] left-[37%] md:left-[40%] bg-blue-900 rounded-full">
                  <i className="fa-brands fa-shopify text-5xl p-6 text-slate-100"></i>
                </div>
              </div>
            </div>
            <div className="w-[80%] lg:w-2/4 mt-20 lg:mt-0">
              <div className="w-full lg:w-[60%] mx-auto border-2 p-5 rounded-xl lg:h-[330px] relative">
                <h1 className="text-center lg:w-[60%] mx-auto text-slate-800 font-semibold text-xl pt-16">Digital Marketing</h1>
                <p className="text-slate-600 mt-10 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste. Delectus obcaecati aliquam quia ex cumque commodi perspiciatis, nostrum soluta!</p>
                <div className="w-full lg:w-[80%] mx-auto mt-10">
                  <button className=" mx-auto border p-3 text-center rounded-full w-[60%] block lg:w-[40%]">Read More</button>
                </div>
                <div className="absolute top-[-45px] left-[37%] md:left-[40%] bg-orange-600 rounded-full">
                  <i className="fa-solid fa-rocket text-5xl p-6 text-slate-100"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
