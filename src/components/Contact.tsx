"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Puzzle from "@/components/Animations/Puzzle";

export default function About() {
  return (
    <>
      <div className="w-full h-screen flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center relative">
          <Puzzle/>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center md:mt-0 mt-10">
          <div className="flex flex-col md:text-5xl text-4xl w-full pl-10 md:pl-20">
            <p className="">
              Let's <b className="text-gray-500">Work</b> Together{" "}
            </p>
          </div>

          <div className="xl:w-[80%] w-[70%] mt-10 flex justify-center items-center gap-10 xl:text-base text-sm">
            <div className="flex items-center ">
              <b className="text-rhetor text-5xl mr-3">·</b>
              <p className="flex flex-wrap">
                Reach out to us on
                <a
                  href="https://www.instagram.com/rhetor.in/"
                  className="underline sm:ml-1 ml-0"
                >
                  Instagram
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <b className="text-rhetor text-5xl mr-3">·</b>
              <p className="flex flex-wrap">
                Send us an email at
                <a
                  href="mailto:info@rhetor.agency"
                  className="underline sm:ml-1 ml-0"
                >
                  info@rhetor.in
                </a>
              </p>
            </div>
          </div>

          <div className="flex mt-10 w-full md:pr-20 pr-10 text-right flex-col md:text-5xl text-4xl">
            <p className="">We'll get back, </p>
            <b className="text-gray-500">quick.</b>
          </div>
        </div>
      </div>
    </>
  );
}
