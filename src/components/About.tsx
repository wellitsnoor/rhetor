"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);
  const circle4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const expland = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // when top of container hits 80% of viewport
          toggleActions: "restart none none none", // play only once
        },
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
            x: 100,
            y: -50,
            duration: 1,
          },
          0.3
        )
        .to(
          circle3.current,
          {
            x: 200,
            y: -100,
            duration: 1,
          },
          0.6
        )
        .to(
          circle4.current,
          {
            x: 300,
            y: -150,
            duration: 1,
          },
          0.9
        );
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">animation</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col ">
            <motion.p className="text-5xl">
              <b className="text-gray-500">How</b> we work{" "}
              <b className="text-rhetor">·</b>
            </motion.p>
            <p className="text-5xl ml-20 mt-3">
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
      <div className="w-full overflow-hidden h-screen flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col text-5xl">
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
              <b>connect</b> , and <b>thrive</b>.
            </p>
          </div>

          <div className="w-[80%] mt-14 flex justify-center items-center gap-10">
            <p className="flex flex-row justify-center items-center">
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
          className="w-1/2 h-full max-h-screen flex -translate-x-[20%] translate-y-[10%] flex-col justify-center items-center relative"
        >
          <div
            ref={circle1}
            className=" w-28 h-28 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer justify-center items-center"
          ></div>
          <div
            ref={circle2}
            className=" w-28 h-28 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
          ></div>
          <div
            ref={circle3}
            className=" w-28 h-28 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
          ></div>
          <div
            ref={circle4}
            className=" w-28 h-28 absolute bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
          ></div>
        </div>
      </div>
    </>
  );
}
