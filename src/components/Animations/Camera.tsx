import React, { useRef } from "react";

export default function Camera() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative w-full  flex items-center justify-center h-full"
      >
        <div className="xl:w-64 w-52 xl:h-40 h-32 rounded-xl bg-rhetor flex items-center justify-center">
          <div className="h-24 w-24 rounded-full ml-auto mr-4 flex items-center justify-center bg-red-300">
            <div className="h-20 w-20 relative rounded-full flex flex-col items-center justify-center bg-white">
            {/* <div className="absolute h-1/2 w-1/2 rounded-full flex flex-col items-center justify-center bg-black  z-10"></div> */}
              <div className="h-[50%] w-full flex mb-auto rounded-t-full bg-black"></div>
              <div className="h-[50%] w-full flex mt-auto rounded-b-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
