"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import BigBang from "./Animations/BigBang";
import Camera from "./Animations/Camera";
import Building from "./Animations/Building";
import Grid from "./Animations/Grid";

export default function Services() {
  const services = [
    {
      title: "For Brands",
      title2: "Influencer Marketing That Works",
      description:
        "We match you with the right creators and run campaigns that actually deliver, think strategy, content, and amplification all in one place.",
    },
    {
      title: "Content Creation",
      title2: "Shoot. Edit. Deliver.",
      description:
        "From UGC-style videos to polished brand shoots, we handle the entire production process so your content looks great and performs even better.",
    },
    {
      title: "For Creators",
      title2: "We Bring You Brand Deals",
      description:
        "We help you land paid work, grow your presence, and handle the back-end so you can focus on creating. Think of us as your partner, not just your manager.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center md:px-16 px-10">
      <div className="flex flex-col md:w-1/2 w-full h-fit">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
          Our Services
        </h1>

        <div className="flex flex-col md:mt-20 mt-10 md:w-[80%] xl:w-[60%]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col"
              onClick={() => setActive(index)}
            >
              <p
                className={`text-2xl xl:text-3xl font-bold first:rounded-tl-xl items-center flex rounded- border-1 border-white/50 border-r-0 transition-all last:border-b-0 rounded-br-0 px-5 md:py-5 py-3 cursor-pointer ${
                  active === index ? "text-rhetor md:py-7 py-5" : "text-white"
                }`}
              >
                <small className="text-sm mr-2 font-normal text-white">
                  {" "}
                  {"0" + (index + 1) + " "}
                </small>
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 w-full h-fit translate-y-[0%] md:-translate-y-[5%] mt-10 md:mt-0 overflow-hidden">
        {active !== null ? (
          <div className="flex flex-col mt-10 gap-3">
            <svg
              onClick={() => setActive(null)}
              viewBox="0 0 24 24"
              stroke="white"
              className="size-10 md:size-12 cursor-pointer ml-auto -translate-y-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8L8 16M8.00001 8L16 16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {active === 0 && (
              <div className="md:h-fit flex md:my-0 h-[3rem]">
                <Building />
              </div>
            )}
            {active === 1 && (
              <div className="md:h-fit md:my-0 my-10 h-[0rem]">
                <Camera />
              </div>
            )}
            {active === 2 && (
              <div className="my-10 flex md:h-fit h-[0rem] translate-x-[50%]">
                <BigBang />
              </div>
            )}

            <div>
              <p className="text-3xl xl:px-20 md:text-4xl  font-bold mt-10 xl:mt-20">
                {services[active].title2}
              </p>
              <p className="text-sm xl:px-20 md:text-base xl:text-xl mt-5 font-normal text-justify">
                {services[active].description}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:mt-10 mt-10 md:h-[27rem] h-[15rem] ">
            <Grid />
          </div>
        )}
      </div>
    </div>
  );
}
