import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Building() {
  const container = useRef<HTMLDivElement>(null);
  const buildings = useRef<HTMLDivElement[]>([]);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const grow = gsap.timeline({ ease: "power2.inOut" });

    gsap.set(buildings.current, {
      height: 0,
    });

    grow.to(buildings.current, {
      height: (index) => {
        const heights = !mobile ? [48, 80, 112, 160] : [12, 20, 28, 40]; // h-12, h-20, h-28, h-40 in pixels
        return heights[index];
      },
      duration: 1,
      stagger: 0.2,
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full relative h-40 justify-center text-center bottom-0 flex gap-3"
      ref={container}
    >
      {[...Array(4)].map((_, i) => {
        return (
          <div
            key={i}
            className="w-16 bg-rhetor flex mt-auto"
            ref={(el) => {
              if (el) buildings.current[i] = el;
            }}
          ></div>
        );
      })}
    </div>
  );
}
