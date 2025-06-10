import { motion } from "framer-motion";
import React from "react";
import Bubble from "./Animations/Bubble";

export default function About1() {
  return (
    <div className="w-full h-screen flex md:flex-row flex-col-reverse">
      <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center">
        <Bubble />
      </div>
      <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col justify-center items-center md:mt-0 mt-10">
        <div className="flex flex-col ">
          <motion.p className="xl:text-5xl text-4xl">
            <b className="text-gray-500">How</b> we work{" "}
            <b className="text-rhetor">·</b>
          </motion.p>
          <p className="xl:text-5xl text-4xl ml-20 mt-3">
            <b className="text-rhetor">·</b>{" "}
            <b className="text-gray-500">Why</b> it <b>works</b>
          </p>
        </div>

        <p className="w-[70%] mt-14 text-left">
          We’re a content and creator agency that pairs thoughtful strategy with
          high-impact execution.
        </p>
        <p className="w-[70%] mt-3 text-right">
          Whether you’re a brand or a creator, we’re here to make your life
          easier, and your work stand out.
        </p>
      </div>
    </div>
  );
}
