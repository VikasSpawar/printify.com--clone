import React from "react";
import SVGComponent from "../assets/logos";
import Features from "./Features";

const Homepage = () => {
  return (
    <div>
      <div className=" flex w-full  justify-between px-8 mt-8">
        <div className=" text-left  flex flex-col justify-between  px-6 py-14">
          <h1 className="pr-8 leading-[40px] tracking-[-1px]  font-bold text-3xl max-w-80 leading-1">
            Create and sell custom products
          </h1>
          <ul className="green-tick">
            <li>100% Free to use</li>
            <li>900+ High-Quality Products</li>
            <li>Largest global print network</li>
          </ul>
          <div >
              <div className="space-x-4">
                    <button className="px-4 py-2 rounded-sm text-white bg-primary ">
              
                Start for free
              </button>
           
            <button
              className=" px-4 py-2 rounded-md"
            >
              How it works?
            </button>
              </div>
          
            <p className="text-primary my-3 font-medium ">Trusted by over 8M sellers around the world
          </p>
          </div>
        
        </div>
        <div >
          <div>
            {/* svg */}
            <SVGComponent />
          </div>
        </div>
      </div>
      <Features/>
    </div>
  );
};

export default Homepage;
