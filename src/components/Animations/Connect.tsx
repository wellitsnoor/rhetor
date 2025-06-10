"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function () {
  const connectRef = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const top1 = useRef<HTMLDivElement>(null);
  const bottom1 = useRef<HTMLDivElement>(null);

  const [mobile, setMobile] = useState(false);

  useEffect(() => { 
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const connect = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: connectRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    gsap.set([top.current, bottom.current, top1.current, bottom1.current], {
      opacity: 1,
    });
    gsap.set(top.current, {
      y: mobile ? -70 : -150,
    });
    gsap.set(bottom.current, {
      y: 0,
    });
    gsap.set(top1.current, {
      y: mobile ? -70 : -150,
      x: mobile ? 70 : 150,
    });
    gsap.set(bottom1.current, {
      y: 0,
      x: mobile ? -70 : -150,
    });

    connect.to(
      [bottom.current, top.current, bottom1.current, top1.current],
      {
        rotateY: 180,
        rotateX: 180,
        stagger: 0.5,
        backgroundColor: "white",
        duration: 1.5,
      },
      0
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      ref={connectRef}
      className="relative w-full h-full overflow-hidden flex justify-center items-center translate-y-[10%]"
    >
      <div
        ref={top}
        className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-rhetor  rounded-full cursor-pointer"
      ></div>
      <div
        ref={bottom}
        className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-rhetor  rounded-full cursor-pointer"
      ></div>
      <div
        ref={top1}
        className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-rhetor  rounded-full cursor-pointer"
      ></div>
      <div
        ref={bottom1}
        className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-rhetor  rounded-full cursor-pointer"
      ></div>
    </div>
  );
}
