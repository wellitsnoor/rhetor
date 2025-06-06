import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bubble() {
  const container = useRef<HTMLDivElement>(null);
  const cell1 = useRef<HTMLDivElement>(null);
  const split1 = useRef<SVGSVGElement>(null);
  const cell2 = useRef<HTMLDivElement>(null);
  const split2 = useRef<SVGSVGElement>(null);
  const cell3 = useRef<HTMLDivElement>(null);
  const cell4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const birth = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
        onEnter: () => birth.restart(),
        onEnterBack: () => birth.restart(),
      },
    });

    gsap.set([split1.current, split2.current], {
      startAt: {
        x: 0,
        y: 0,
      },
      scale: 0,
    });
    gsap.set(cell2.current, {
      y: 0,
    });
    gsap.set(cell3.current, {
      opacity: 0,
      x: 0,
    });
    gsap.set(cell4.current, {
      scale: 0,
    });

    birth
      .to(
        cell1.current,
        {
          scale: 1,
          duration: 1,
        },
        0
      )
      .to(
        split1.current,
        {
          opacity: 1,
          y: -20,
          scale: 1,
          duration: 2,
        },
        0.5
      )
      .to(
        cell2.current,
        {
          scale: 1,
          y: -190,
          duration: 2,
        },
        0.5
      )
      .to(
        cell3.current,
        {
          opacity: 1,
          delay: 2,
          duration: 0,
        },
        0.5
      )
      .to(
        split2.current,
        {
          y: -185,
          duration: 0,
        },
        0.5
      )
      .to(
        split2.current,
        {
          scale: 1,
          opacity: 1,
          x: 190,
          duration: 2,
        },
        2.5
      )
      .to(
        cell3.current,
        {
          opacity: 1,
          x: 200,
          duration: 2,
        },
        2.5
      )
      .to(
        cell4.current,
        {
          scale: 1,
          duration: 1,
        },
        3.0
      );
  });

  return (
    <div ref={container} className="relative flex justify-center items-center w-full h-full  translate-y-[10%]">
      <div
        ref={cell1}
        className="absolute lg:w-36 md:w-20 w-16 lg:h-36 md:h-20 h-16 bg-rhetor  rounded-full cursor-pointer"
      ></div>
      <svg
        viewBox="0 0 190 500"
        className="absolute size-64 z-10 -translate-y-[10%]"
        ref={split1}
      >
        <path
          d="M 0 0 H 0 Q 95 107 0 217 H 189 Q 95 107 189 0"
          fill="#b02b2d"
        />
      </svg>
      <div
        ref={cell2}
        className="absolute -translate-y-4/3 lg:w-36 md:w-20 w-16 lg:h-36 md:h-20 h-16 bg-rhetor rounded-full cursor-pointer"
      ></div>
      <svg
        viewBox="0 0 600 190"
        className="absolute -translate-y-[73%] translate-x-[75%] size-64 z-10"
        ref={split2}
      >
        <path d="M190-10V-10Q83 85-27-10V179Q83 85 190 179" fill="#b02b2d" />
      </svg>
      <div
        ref={cell3}
        className="absolute -translate-y-4/3 translate-x-[140%] lg:w-36 md:w-20 w-16 lg:h-36 md:h-20 h-16 bg-rhetor rounded-full cursor-pointer"
      ></div>
      <div
        ref={cell4}
        className="absolute translate-x-[140%] lg:w-36 md:w-20 w-16 lg:h-36 md:h-20 h-16 bg-rhetor rounded-full cursor-pointer"
      ></div>
    </div>
  );
}
