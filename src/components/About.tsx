"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bubble from "./Animations/Bubble";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);
  const circle4 = useRef<HTMLDivElement>(null);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const ctx = gsap.context(() => {
      const expland = gsap.timeline({
        // scrollTrigger: {
        //   trigger: container.current,
        //   start: "top 80%", // when top of container hits 80% of viewport
        //   toggleActions: "restart none none none", // play only once
        // },
        repeat: 0,
        ease: "power2.inOut",
      });

      expland
        .to(
          circle1.current,
          {
            x: 0,
            duration: 1,
          },
          0
        )
        .to(
          circle2.current,
          {
            x: mobile ? 50 : 100,
            y: mobile ? -25 : -50,
            duration: 1,
          },
          0.3
        )
        .to(
          circle3.current,
          {
            x: mobile ? 100 : 200,
            y: mobile ? -50 : -100,
            duration: 1,
          },
          0.6
        )
        .to(
          circle4.current,
          {
            x: mobile ? 150 : 300,
            y: mobile ? -75 : -150,
            duration: 1,
          },
          0.9
        );
    });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div className="w-full h-screen flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center">
          <Bubble />
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center md:mt-0 mt-10">
          <div className="flex flex-col ">
            <motion.p className="xl:text-5xl text-4xl">
              <b className="text-gray-500">How</b> we work{" "}
              <b className="text-rhetor">·</b>
            </motion.p>
            <p className="xl:text-5xl text-4xl ml-20 mt-3">
              <b className="text-rhetor">·</b>{" "}
              <b className="text-gray-500">Why</b> it <b>works</b>
            </p>
          </div>

          <p className="w-[70%] mt-14 text-left">
            We’re a content and creator agency that pairs thoughtful strategy
            with high-impact execution.
          </p>
          <p className="w-[70%] mt-3 text-right">
            Whether you’re a brand or a creator, we’re here to make your life
            easier, and your work stand out.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden h-screen flex md:flex-row flex-col ">
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center md:mt-0 mt-10">
          <div className="flex flex-col xl:text-5xl text-3xl ml-0 md:ml-10 xl:ml-0">
            <p className="">We don't just "do" </p>
            <p className="">
              <b className="text-gray-500">influencer marketing</b> or
            </p>
            <p className="">
              <b className="text-gray-500">content production</b>.
            </p>

            <p className=" ml-20 mt-3 text-right">
              We help you <b>grow</b>
            </p>
            <p className=" ml-20 text-right">
              <b>connect</b>, and <b>thrive</b>.
            </p>
          </div>

          <div className="xl:w-[80%] w-[90%] mt-14 flex justify-center items-center gap-10 xl:text-base text-sm">
            <p className="flex flex-row justify-center items-center ">
              {" "}
              <b className="text-rhetor text-5xl mr-3">·</b>Clear thinking
              behind every campaign
            </p>
            <p className=" flex flex-row justify-center items-center">
              {" "}
              <b className="text-rhetor text-5xl mr-3">·</b>Consistent delivery
              without the chaos
            </p>
            <p className=" flex flex-row justify-center items-center">
              {" "}
              <b className="text-rhetor text-5xl mr-3">·</b>A team that shows up
              like a guide & feels like a friend
            </p>
          </div>
        </div>
        <div
          ref={container}
          className="md:w-1/2 w-full h-full max-h-screen flex lg:-translate-x-[10%] md:-translate-x-[10%] -translate-x-[15%] translate-y-[5%] flex-col justify-center items-center relative"
        >
          <div
            ref={circle1}
            className="lg:w-28  w-16 lg:h-28  h-16 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer justify-center items-center"
          ></div>
          <div
            ref={circle2}
            className=" lg:w-28  w-16 lg:h-28  h-16 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
          ></div>
          <div
            ref={circle3}
            className=" lg:w-28  w-16 lg:h-28  h-16 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
          ></div>
          <div
            ref={circle4}
            className=" lg:w-28  w-16 lg:h-28  h-16 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
          ></div>
        </div>
      </div>
    </>
  );
}
