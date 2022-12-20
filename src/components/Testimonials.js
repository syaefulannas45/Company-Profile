import React from "react";
import Testimonial from "../images/testimonial.jpg";
const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="mb-40">
        <div className="w-full">
          <h1 className="text-center text-4xl text-blue-800 font-semibold">
            Case studies <span className="text-orange-500">and testimonials</span>
          </h1>
          <p className="text-center w-full lg:w-3/4 mx-auto text-slate-700 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit, sed voluptatum fuga quae, recusandae magni odit ipsam atque dolorum in, eum inventore perspiciatis dicta.
          </p>
        </div>
        <div className=" lg:flex-row flex-col flex w-full justify-around mt-16 mb-10 px-6 lg:px-16 items-center">
          <div className="w-full lg:w-2/4">
            <h1 className="font-semibold text-3xl text-blue-800">What The Say ?</h1>
            <p className="text-slate-700 w-full lg:w-[80%] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam officiis minus. Rem mollitia illo, odio aspernatur doloremque totam minima.</p>
            <p className="text-slate-700 w-full lg:w-[80%] mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum dolorum, laboriosam nihil voluptatem quam.</p>
            <p className="text-slate-700 lg:w-[80%] mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero dolorum, quaerat amet praesentium veritatis?</p>
          </div>
          <div className="w-full lg:w-2/4 relative mt-[50px] lg:mt-0">
            <div className="w-[60%] lg:w-[40%] h-80">
              <img src={Testimonial} alt="testimonial" className="w-full h-full rounded-xl" />
              <div className="absolute top-[40%] left-[190px] lg:left-[37%] md:left-[57%] bg-slate-600 rounded-full w-[10%] lg:w-[6%] h-10 md:w-[6%]">
                <i className="fa-solid fa-caret-right text-3xl  text-slate-100 ml-[9.5px] lg:ml-3 mt-1 md:ml-[14px] md:mt-[3.5px]"></i>
              </div>
              <div className="absolute top-[40%] left-[-3%] bg-slate-600 rounded-full w-[10%] lg:w-[6%] h-10 md:w-[6%] md:ml-1">
                <i className="fa-solid fa-caret-left text-3xl  text-slate-100 ml-[8.5px] lg:ml-3 mt-[3px] lg:mt-1 md:ml-3"></i>
              </div>
              <div className="w-[90%] lg:w-[80%] bg-orange-500 absolute lg:bottom-[-80px] left-8 pl-4 rounded-2xl shadow-xl bottom-[-120px] md:bottom-[-80px]">
                <div className="bg-white w-full h-full">
                  <div className="p-4">
                    <p className="text-slate-600 border-l-slate-400 border-l-2 pl-4 text-sm">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus sunt natus perspiciatis incidunt ab unde! Qui molestiae laborum quidem enim laudantium sed natus voluptas?"
                    </p>
                  </div>
                  <div className="flex justify-between p-4">
                    <div>
                      <h1 className="font-boldtext-sm">Sophia Isabella</h1>
                      <p className="text-slate-600 text-sm">Customer</p>
                    </div>
                    <div className="pr-8">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <br />
                      <p className="text-slate-700 text-sm">12 Review at Yelp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
