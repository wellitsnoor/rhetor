"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed flex top-0 h-20 justify-between items-center w-full z-50">
        <div className="flex mr-auto md:pl-10 pl-7 z-50">
          <div className="flex items-center justify-between md:w-40 w-36">
            <a href="/">
              <Image
                src={open ? "/logo/text-white.png" : "/logo/text-white.png"}
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
            <ul className="items-center justify-between gap-10 hidden md:flex">
              <li>
                <a href="/#" onClick={() => setOpen(false)}>Home</a>
              </li>
              <li>
                <a href="/#about" onClick={() => setOpen(false)}>About</a>
              </li>
              <li>
                <a href="/#services" onClick={() => setOpen(false)}>Services</a>
              </li>
              <li>
                <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
              </li>
            </ul>
            <Image
              src="/logo/logo-white.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100% 100%"
              onClick={() => setOpen(!open)}
              className="w-7 h-7 object-contain md:hidden flex cursor-pointer"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed w-screen bg-rhetor h-screen z-20`}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl">
              <li>
                <a href="/#" onClick={() => setOpen(false)}>Home</a>
              </li>
              <li>
                <a href="/#about" onClick={() => setOpen(false)}>About</a>
              </li>
              <li>
                <a href="/#services" onClick={() => setOpen(false)}>Services</a>
              </li>
              <li>
                <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
