"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export default function About() {
  return (
    <>
      <div className="w-full h-screen flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-center relative">
          animation
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col text-5xl w-full pl-20">
            <p className="">
              Let's <b className="text-gray-500">Work</b> Together{" "}
            </p>
          </div>

          <div className="w-[80%] mt-10 flex justify-center items-center gap-10">
            <p className="flex flex-row justify-center items-center">
              {" "}
              <b className="text-rhetor text-5xl mr-3">·</b>
              Reach out to us on{" "}
              <a
                href="https://www.instagram.com/rhetor.in/"
                className="underline ml-1"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row justify-center items-center">
              {" "}
              <b className="text-rhetor text-5xl mr-3">·</b>
              Send us an email at{" "}
              <a href="mailto:info@rhetor.agency" className="underline ml-1">
                info@rhetor.in
              </a>
            </p>
          </div>

          <div className="flex mt-20 w-full pr-20 text-right flex-col text-5xl">
            <p className="">We'll get back, </p>
            <b className="text-gray-500">quick.</b>
          </div>
        </div>
      </div>
    </>
  );
}
