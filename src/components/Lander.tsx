"use client";

import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import gsap from "gsap";

export default function Lander() {
  const nucleus = useRef<HTMLDivElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);
  const circle4 = useRef<HTMLDivElement>(null);
  const circle5 = useRef<HTMLDivElement>(null);
  const circle6 = useRef<HTMLDivElement>(null);
  const circle7 = useRef<HTMLDivElement>(null);
  const circle8 = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0, ease: "power2.inOut" });

    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    gsap.set([nucleus.current], {
      scale: 0.5,
    });
    gsap.set(
      [circle1.current, circle2.current, circle3.current, circle4.current],
      {
        scale: 0.7,
      }
    );
    gsap.set(
      [circle5.current, circle6.current, circle7.current, circle8.current],
      {
        scale: 0.5,
      }
    );

    tl.to(
      nucleus.current,
      {
        scale: 1,
        duration: 1,
      },
      0
    )
      .to(
        circle1.current,
        {
          x: 150,
          duration: 1,
        },
        0.3
      )
      .to(
        circle2.current,
        {
          x: -150,
          duration: 1,
        },
        0.3
      )
      .to(
        circle3.current,
        {
          y: 150,
          duration: 1,
        },
        0.4
      )
      .to(
        circle4.current,
        {
          y: -150,
          duration: 1,
        },
        0.5
      )
      .to(
        circle5.current,
        {
          x: 150,
          y: 150,
          duration: 1,
        },
        1.1
      )
      .to(
        circle6.current,
        {
          x: -150,
          y: -150,
          duration: 1,
        },
        1.3
      )
      .to(
        circle7.current,
        {
          x: 150,
          y: -150,
          duration: 1,
        },
        1.5
      )
      .to(
        circle8.current,
        {
          x: -150,
          y: 150,
          duration: 1,
        },
        1.7
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-screen h-screen flex md:flex-row flex-col ">
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center px-20 md:py-0 py-40 md:text-5xl text-3xl">
        <p className="">At Rhetor, we believe</p>
        <p className="">
          <b className="text-rhetor"> great content </b> takes{" "}
        </p>
        <p>
          more than a <b>deadline</b>
        </p>
        <p className="mt-7 mb-10">
          {" "}
          it takes <b className="">INTENT.</b>
        </p>
        <Button text="Know more" link="/" />
      </div>
      <div className="md:w-1/2 w-full h-full md:mt-0 mt-20 relative flex justify-center items-center">
        <div
          ref={nucleus}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle1}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle2}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle3}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle4}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle5}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle6}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/30 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle7}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle8}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
      </div>
    </div>
  );
}
