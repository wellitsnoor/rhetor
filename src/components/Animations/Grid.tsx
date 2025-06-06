import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Grid() {
  const container = useRef<HTMLDivElement>(null);
  const inner1 = useRef<HTMLDivElement>(null);
  const inner2 = useRef<HTMLDivElement>(null);
  const inner3 = useRef<HTMLDivElement>(null);
  const inner4 = useRef<HTMLDivElement>(null);
  const inner5 = useRef<HTMLDivElement>(null);

  const outer1 = useRef<HTMLDivElement>(null);
  const outer2 = useRef<HTMLDivElement>(null);
  const outer3 = useRef<HTMLDivElement>(null);
  const outer4 = useRef<HTMLDivElement>(null);
  const outer5 = useRef<HTMLDivElement>(null);
  const outer6 = useRef<HTMLDivElement>(null);
  const outer7 = useRef<HTMLDivElement>(null);
  const outer8 = useRef<HTMLDivElement>(null);

  const [key, setKey] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);

    const flower = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        toggleActions: "restart none none none",
        onEnter: () => flower.play(),
        onEnterBack: () => flower.restart(),
        onLeave: () => flower.progress(0).pause(),
        onLeaveBack: () => flower.progress(0).pause(),
      },
    });

    gsap.set(
      [
        inner1.current,
        inner2.current,
        inner3.current,
        inner4.current,
        inner5.current,
        outer1.current,
        outer2.current,
        outer3.current,
        outer4.current,
        outer5.current,
        outer6.current,
        outer7.current,
        outer8.current,
      ],
      {
        scale: 0,
      }
    );

    flower
      .to(
        [
          inner1.current,
          inner2.current,
          inner3.current,
          inner4.current,
          inner5.current,
          outer1.current,
          outer2.current,
          outer3.current,
          outer4.current,
          outer5.current,
          outer6.current,
          outer7.current,
          outer8.current,
        ],
        {
          scale: 1,
          stagger: 0.2,
          duration: 1,
        }
      )
      .to(
        [
          inner1.current,
          inner2.current,
          inner3.current,
          inner4.current,
          inner5.current,
          outer1.current,
          outer2.current,
          outer3.current,
          outer4.current,
          outer5.current,
          outer6.current,
          outer7.current,
          outer8.current,
        ],
        {
          scale: (i) => (Math.random() < 0.5 ? 0.9 : 1.1), // random up/down per element,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.2,
            from: "random",
          },
          duration: 2,
          ease: "power2.inOut",
        }
      );

    return () => {
      window.removeEventListener("resize", handleResize);
      flower.kill();
    };
  }, [key]);

  return (
    <div
      key={key}
      className="relative w-full h-full flex justify-center items-center bg-red-200 md:translate-y-0 translate-y-[10rem]"
      ref={container}
    >
      {/* horizontal */}
      <div
        ref={inner1}
        className="absolute lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={inner3}
        className="absolute translate-x-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={inner5}
        className="absolute -translate-x-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer7}
        className="absolute -translate-x-4/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer3}
        className="absolute translate-x-4/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      {/* vertical */}
      <div
        ref={inner4}
        className="absolute translate-y-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={inner2}
        className="absolute -translate-y-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer1}
        className=" absolute -translate-y-4/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer5}
        className="absolute translate-y-4/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      {/* diagonal */}
      <div
        ref={outer4}
        className="absolute translate-x-2/3 translate-y-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer6}
        className="absolute -translate-x-2/3 translate-y-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer8}
        className="absolute -translate-x-2/3 -translate-y-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
      <div
        ref={outer2}
        className="absolute translate-x-2/3 -translate-y-2/3 lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 bg-gradient-to-r from-rhetor/100 to-rhetor/50 rounded-full cursor-pointer"
      ></div>
    </div>
  );
}
