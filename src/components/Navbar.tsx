"use client";

import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="fixed flex top-0 h-20  justify-between items-center w-full z-50 ">
        <div className="flex mr-auto pl-10 z-50">
          <div className="flex items-center justify-between w-40">
            <a href="/">
              <Image 
                src="/logo/text-red.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100% 100%"
                className="w-full h-full object-contain"
                priority
              />
            </a>
          </div>
        </div>
        <div className="flex ml-auto right-0 pr-10 z-50 ">
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-between gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
