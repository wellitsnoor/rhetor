"use client";

import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LanderProps = {
  sectionsRef: React.MutableRefObject<HTMLElement[]>;
};

export default function Lander({ sectionsRef }: LanderProps) {
  const container = useRef<HTMLDivElement>(null);
  const nucleus = useRef<HTMLDivElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);
  const circle4 = useRef<HTMLDivElement>(null);
  const circle5 = useRef<HTMLDivElement>(null);
  const circle6 = useRef<HTMLDivElement>(null);

  const [base, setBase] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setBase(
        window.innerWidth < 768 ? 0.5 : window.innerWidth < 1024 ? 0.7 : 1
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      const cell = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",

          toggleActions: "restart none none none",
        },
        defaults: {
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          repeatDelay: 1,
        },
      });

      gsap.set([nucleus.current], {
        scale: 0.5,
      });
      gsap.set(
        [
          circle1.current,
          circle2.current,
          circle3.current,
          circle4.current,
          circle5.current,
          circle6.current,
        ],
        {
          scale: 0.7,
        }
      );

      gsap.to(
        [
          circle1.current,
          circle2.current,
          circle3.current,
          circle4.current,
          circle5.current,
          circle6.current,
        ],
        {
          scale: 1,
          duration: 1,
        }
      );

      cell
        .to(
          [nucleus.current],
          {
            scale: 1,
            duration: 1,
          },
          0
        )
        .to(
          circle4.current,
          {
            y: -150 * base,
            duration: 1,
          },
          0.3
        )
        .to(
          circle5.current,
          {
            x: 150 * base,
            y: -70 * base,
            duration: 1,
          },
          0.5
        )
        .to(
          circle1.current,
          {
            x: 150 * base,
            y: 70 * base,
            duration: 1,
          },
          0.7
        )
        .to(
          circle3.current,
          {
            y: 150 * base,
            duration: 1,
          },
          0.9
        )
        .to(
          circle2.current,
          {
            x: -150 * base,
            y: 70 * base,
            duration: 1,
          },
          1.1
        )
        .to(
          circle6.current,
          {
            x: -150 * base,
            y: -70 * base,
            duration: 1,
          },
          1.3
        );

      cell.play();
    });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [base]);

  return (
    <div className="w-screen h-screen flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center xl:pl-40 md:pl-20 pl-20 md:py-0 pt-32 xl:text-5xl lg:text-[2.5rem] text-3xl ">
        <p className="">At Rhetor, we believe</p>
        <p className="">
          <b className="text-rhetor"> great content </b> takes{" "}
        </p>
        <p>
          more than a <b>deadline</b>
        </p>
        <p className="mt-7 mb-10">
          {" "}
          it takes <b className="text-neutral-400">INTENT.</b>
        </p>
        <div
          className="cursor-pointer flex w-fit"
          onClick={() => {
            const about = sectionsRef.current[1];
            if (about) {
              gsap.to(window, {
                scrollTo: about,
                duration: 0.75,
                ease: "power2.out",
              });
            }
          }}
        >
          <Button text="Know more" />
        </div>
      </div>
      <div
        className="md:w-1/2 w-full h-full relative flex justify-center items-center"
        ref={container}
      >
        <div
          ref={nucleus}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full"
        ></div>
        <div
          ref={circle1}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full"
        ></div>
        <div
          ref={circle2}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full"
        ></div>
        <div
          ref={circle3}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full"
        ></div>
        <div
          ref={circle4}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full"
        ></div>
        <div
          ref={circle5}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full"
        ></div>
        <div
          ref={circle6}
          className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/30 rounded-full"
        ></div>
        {/* <div
          ref={circle7}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div>
        <div
          ref={circle8}
          className="absolute w-28 h-28 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
        ></div> */}
      </div>
    </div>
  );
}
