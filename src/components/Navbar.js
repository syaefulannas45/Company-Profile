import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setTogggle] = useState(false);
  return (
    <>
      <section id="Navbar" className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full justify-between px-5 lg:px-16 py-5 items-center">
            <div className="text-blue-800 font-bold text-4xl pr-32">
              Syn <span className="text-orange-500">Coder</span>
            </div>
            <div>
              <button onClick={() => setTogggle(!toggle)}>
                <i className={`fa-solid fa-bars text-2xl lg:hidden ${!toggle ? "block" : "hidden"}`}></i>
                <i className={`fa-solid fa-xmark lg:hidden text-2xl ${toggle ? "block" : "hidden"}`}></i>
              </button>
            </div>
          </div>
          <ul className={`lg:flex w-full lg:items-center pl-5 lg:pl-28 flex-col lg:flex-row text-slate-700 ${toggle ? "block" : "hidden"} animate-[left_1s_1] lg:animate-none`}>
            <li className="mr-8 py-5 lg:py-0 text-orange-500 border-b-orange-500 border-b">Home</li>
            <li className="mr-8 py-5 lg:py-0">How We Work</li>
            <li className="mr-8 py-5 lg:py-0">Our Team</li>
            <li className="mr-8 py-5 lg:py-0">Careers</li>
            <li className="pb-4 lg:pb-0">Blog</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
