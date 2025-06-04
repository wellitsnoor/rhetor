"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function BigBang() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const earth = useRef<HTMLDivElement>(null);
  const moon = useRef<HTMLDivElement>(null);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {

    setMobile(window.innerWidth < 768);

    const bigbang = gsap.timeline({
      ease: "power3.inOut",
    });

    gsap.set(circlesRef.current, {
      x: 0,
      y: 0,
      scale: 0.5,
      opacity: 1,
    });
    gsap.set(earth.current, {
      scale: 0,
      z: 100,
    });
    gsap.set(moon.current, {
      scale: 0,
      x: mobile ? 100 : 125,
      y: mobile ? 30 : 45,
    });

    // big bang
    bigbang.to(circlesRef.current, {
      duration: 1,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      stagger: 0.05,
      scale: 1.5,
      opacity: 0,
    });

    // earth appears
    bigbang.to(
      earth.current,
      {
        scale: 1,
        duration: 1,
      },
      0.1
    );

    // moon appears
    bigbang.to(
      moon.current,
      {
        scale: 1,
        duration: 1,
      },
      0.7
    );

    bigbang.call(() => {
      const rotation = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      rotation.to(moon.current, {
        x: -40,
        y: mobile ? 30 : 45,
        duration: 3,
        ease: "power3.inOut",
        yoyo: true,
        repeat: -1,
        z: 100,
      });
     
    });
  });
  return (
    <div className="flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-full  flex items-center justify-center h-full"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) {
                circlesRef.current[i] = el;
              }
            }}
            className="absolute w-8 h-8 rounded-full bg-rhetor"
          />
        ))}
        <div
          ref={earth}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute w-20 h-20 xl:w-28 xl:h-28 rounded-full bg-gradient-to-r from-rhetor to-rhetor/50"
        >
          <div
            className="absolute w-5 h-5 xl:w-7 xl:h-7 rounded-full bg-white"
            ref={moon}
          ></div>
        </div>
      </div>
    </div>
  );
}
