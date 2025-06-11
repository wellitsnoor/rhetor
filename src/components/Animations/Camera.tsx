import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Camera() {
  const container = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const lens2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const camera = gsap.timeline({
      ease: "power2.inOut",
      duration: 1,
    });

    gsap.set(body.current, {
      width: "10%",
    });
    gsap.set([lens.current, lens2.current], {
      scale: 0,
    });

    camera
      .to(
        body.current,
        {
          width: "100%",
          duration: 1,
        },
        0
      )
      .to(
        lens.current,
        {
          scale: 1,
          duration: 1,
        },
        1
      )
      .to(
        lens2.current,
        {
          scale: 0.8,
          duration: 1,
        },
        1.3
      );

    camera.call(() => {
      const shutter = gsap.timeline({
        repeat: -1,
        ease: "power2.inOut",
        yoyo: true,
      });

      shutter.to(
        lens2.current,
        {
          scale: 0.5,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      );
    });
  }, []);

  return (
    <div className="flex relative h-40 justify-center items-center">
      <div
        ref={container}
        className="relative  flex items-center justify-center xl:w-64 w-52 xl:h-40 h-32"
      >
        <div
          ref={body}
          className="w-full h-full rounded-xl bg-rhetor flex items-center justify-center"
        >
          <div
            ref={lens}
            className="h-24 w-24 rounded-full ml-auto mr-4 flex items-center justify-center bg-red-300"
          >
            <div
              ref={lens2}
              className="h-20 w-20 relative rounded-full flex flex-col items-center justify-center bg-white"
            >
              {/* <div className="absolute h-1/2 w-1/2 rounded-full flex flex-col items-center justify-center bg-black  z-10"></div> */}
              {/* <div className="h-[50%] w-full flex mb-auto rounded-t-full bg-black"></div>
              <div className="h-[50%] w-full flex mt-auto rounded-b-full bg-black"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
