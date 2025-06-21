"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

export default function Button({ text, link, onClick }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <motion.a
        initial={{ width: "8.79rem" }}
        whileHover={{ width: mobile ? "8.79rem" : "12rem" }}
        whileTap={{ width: mobile ? "8.79rem" : "12rem" }}
        transition={{ duration: 0.3 }}
        href={link || "#"}
        className="relative h-[2.9rem] text-xl text-white rounded-full border-1 overflow-hidden"
        onMouseEnter={() => setIsHovered(mobile ? false : true)}
        onMouseLeave={() => setIsHovered(mobile ? false : false)}
        onClick={onClick}
      >
        <span className="absolute rounded-full px-5 py-2 bg-rhetor">
          {text}
        </span>
        {isHovered && (
          <motion.span
            key="arrow"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="absolute right-0 px-5 py-2 ml-auto rounded-r-full flex"
          >
            →
          </motion.span>
        )}
      </motion.a>
    </>
  );
}
