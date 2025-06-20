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
        scrollTrigger: {
          trigger: container.current,
          start: mobile ? "top bottom" : "top 80%",
          toggleActions: "play none none none",
        },

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
        )
        .to(
          circle4.current,
          {
            x: mobile ? 75 : 150,
            y: mobile ? -35 : -75,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            repeatDelay: 1,
            delay: 1,
            duration: 2,
          },
          1
        )
        .to(
          circle3.current,
          {
            x: mobile ? 50 : 100,
            y: mobile ? -25 : -50,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            repeatDelay: 1,
            delay: 1,
            duration: 2,
          },
          1
        )
        .to(
          circle2.current,
          {
            x: mobile ? 25 : 50,
            y: mobile ? -12 : -25,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 1,
            repeatDelay: 1,
            duration: 2,
          },
          1
        )
        .to(
          circle1.current,
          {
            x: 0,
            y: 0,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 1,
            duration: 2,
          },
          1
        );
    });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);

  return (
    <>
   
      <div className="w-full overflow-hidden justify-center items-center
       h-screen flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full md:h-full h-fit flex flex-col justify-center md:items-center md:mt-0 mt-24">
          <div className="flex flex-col xl:text-5xl text-3xl md:pl-20 pl-10 xl:pl-0">
            <p className="">We don't just "do"</p>
            <p className="">
              <b className="text-neutral-400">influencer marketing</b> or
            </p>
            <p className="">
              <b className="text-neutral-400">content production</b>.
            </p>

            <p className=" md:ml-20 ml-0 mt-5 md:text-right">
              We help you <b>grow</b>
            </p>
            <p className=" md:ml-20 md:text-right">
              <b>connect</b>, and <b>thrive</b>.
            </p>
          </div>

          <div className="xl:w-[80%] w-[90%] mt-10 flex justify-center items-center gap-3 md:gap-10 xl:text-base text-[0.7rem] ml-5 ">
            <p className="flex flex-row justify-center items-center ">
              {" "}
              <b className="text-rhetor text-5xl md:mr-3 mr-1">·</b>Clear thinking
              behind every campaign
            </p>
            <p className=" flex flex-row justify-center items-center">
              {" "}
              <b className="text-rhetor text-5xl md:mr-3 mr-1">·</b>Consistent delivery
              without the chaos
            </p>
            <p className=" flex flex-row justify-center items-center">
              {" "}
              <b className="text-rhetor text-5xl md:mr-3 mr-1">·</b>A team that shows up
              like a guide & feels like a friend
            </p>
          </div>
        </div>
        <div
          ref={container}
          className="md:w-1/2 w-full h-[15rem] md:mt-0 mt-20 flex lg:-translate-x-[10%] md:-translate-x-[10%] -translate-x-[15%] flex-col justify-center items-center relative -translate-y-[10%] md:translate-y-[10%] "
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
